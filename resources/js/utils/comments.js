import PostService from "../API/PostService";

export const showChildComments = async (
    comment,
    setComment,
    setIsLoading
) => {
    setIsLoading(true);
    const response = await PostService.getChildComments(comment.id);
    const newComment = {
        ...comment, child: response.data
    }
    setComment(newComment)

    // if (!commentShow.visible) {
    //     setCommentShow({visible: true, title: 'Скрыть комментарии'})
    //     setvisibleClass(visibleClass + ' show')
    // } else {
    //     setCommentShow({visible: false, title: 'Показать еще ' + comment.child_count})
    //     setvisibleClass('comment__children')
    // }
    setIsLoading(false);
}

export const changeShowLink = (comment, commentShow, setCommentShow, visibleClass, setvisibleClass) => {
    if (!commentShow.visible) {
        setCommentShow({visible: true, title: 'Скрыть комментарии'})
        setvisibleClass(visibleClass + ' show')
    } else {
        setCommentShow({visible: false, title: 'Показать еще ' + comment.child_count})
        setvisibleClass('comment__children')
    }
}

export const addCommentLike = async (comment, likeYet, setLike, setLikeYet) => {
    if(!likeYet) {
        const response = await PostService.addLikeComment(comment.id);
        setLike(response.data);
        setLikeYet(true);
    }
}

export const createComment = async (newComment, posts, comments, setComments, selectedFile, setFilePreview) => {

    if(selectedFile.length) {
        return  createPostWithFile(newPost, posts, setPosts, selectedFile, setFilePreview)
    } else {
        return storePost(newPost, posts, setPosts)
    }
}

const createPostWithFile = async (newComment, posts, comments, setComments, selectedFile, setFilePreview) => {
    const fd = new FormData();
    if(selectedFile && selectedFile.length) {
        selectedFile.map((item, i) => {
            fd.append('image[]', item, item.name)
        })
    }
    axios.post('/api/comment/upload', fd, {
        onUploadProgress: progressEvent => {
            console.log('upload progress' + Math.round(progressEvent.loaded / progressEvent.total * 100) + '%')
        }
    }).then(res => {
        if(res && res.status === 200) {

            const filePath = res.data.map(item => { return  item.replace('public', 'storage') })
            setFilePreview([]);
            return storeComment(
                {...newComment, attachment: filePath},
                comments,
                setComments
            );
        }
    });
}

const storeComment = async (newComment, comments, setComments) => {
    const response = await PostService.createPost(newComment);
    if(response.status === 200) {
        newComment = {...newComment, id: response.data.post.id};
        setComments([newComment, ...comments]);
    }
    return response;
}


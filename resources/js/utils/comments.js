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

export const createComment = async (post, newComment, setComment, selectedFile, setFilePreview) => {

    if(selectedFile.length) {
        return  createCommentWithFile(post, newComment, setComment, selectedFile, setFilePreview)
    } else {
        return storeComment(post, newComment, setComment)
    }
}

const createCommentWithFile = async (post, newComment, setComment, selectedFile, setFilePreview) => {
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
                post,
                {...newComment, attachment: filePath},
                setComment
            );
        }
    });
}

const storeComment = async (post, newComment, setComment) => {
    const response = await PostService.createComment(newComment);
    if(response.status === 200) {
        newComment = {...newComment, id: response.data.post.id};
        setComment([newComment, ...post.comments]);
    }
    return response;
}


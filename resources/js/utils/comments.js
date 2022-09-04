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

export const showParentComments = async (
    post,
    comments,
    setComments,
    position,
    setIsLoading
) => {
    setIsLoading(true);
    const response = await PostService.getParentComments(post.id, position);
    const newComment = response.data.data;
    setComments([...comments, ...newComment]);
    setIsLoading(false);
}

export const addCommentLike = async (comment, likeYet, setLike, setLikeYet) => {
    if(!likeYet) {
        const response = await PostService.addLikeComment(comment.id);
        setLike(response.data);
        setLikeYet(true);
    }
}

export const createComment = async (post, newComment, comments, setComment, selectedFile, setFilePreview, isChild = false) => {
    console.log(post, newComment, comments)
    if(selectedFile.length) {
        return  createCommentWithFile(post, newComment, comments, setComment, selectedFile, setFilePreview)
    } else {
        return storeComment(post, newComment, comments, setComment, isChild)
    }
}

const createCommentWithFile = async (post, newComment, comments,  setComment, selectedFile, setFilePreview) => {
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
                comments,
                setComment
            );
        }
    });
}

const storeComment = async (post, newComment, comments, setComment, isChild) => {
    const response = await PostService.createComment(newComment);
    if(response.status === 200) {
        // console.log(post.comments);
        if(!isChild) {
            newComment = {...newComment, id: response.data.post.id};
            setComment([newComment, ...comments]);
        } else {
            const childComment = {...comments[0], child: newComment};
            setComment(childComment);

        }
    }
    return response;
}


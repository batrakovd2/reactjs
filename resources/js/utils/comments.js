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

import PostService from "../API/PostService";

export const addPostLike = async (postId, likeYet, setLikeYet, setLike) => {
    if(!likeYet) {
        const response = await PostService.addLikePost(postId);
        setLike(response.data);
        setLikeYet(true);
    }
}

export const createPost = async (post, setPost) => {
    const response = await PostService.createPost(post);
    if(response.status == 200) {
        console.log(post, response)
        setPost(response.data.post);
    }
    return response.data;

}

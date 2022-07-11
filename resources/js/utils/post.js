import PostService from "../API/PostService";

export const addPostLike = async (postId, likeYet, setLikeYet, setLike) => {
    if(!likeYet) {
        const response = await PostService.addLikePost(postId);
        setLike(response.data);
        setLikeYet(true);
    }
}

export const createPost = async (newPost, posts, setPosts) => {
    const response = await PostService.createPost(newPost);
    if(response.status == 200) {
        newPost = {...newPost, id: response.data.post.id}
        setPosts([newPost, ...posts])
    }
    return response.data;

}

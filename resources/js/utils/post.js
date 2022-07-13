import PostService from "../API/PostService";

export const addPostLike = async (postId, likeYet, setLikeYet, setLike) => {
    if(!likeYet) {
        const response = await PostService.addLikePost(postId);
        setLike(response.data);
        setLikeYet(true);
    }
}

export const createPost = async (newPost, posts, setPosts, selectedFile) => {
    if(selectedFile) {
        return  createPostWithFile(newPost, posts, setPosts, selectedFile)
    } else {
        return storePost(newPost, posts, setPosts)
    }
}

const createPostWithFile = async (newPost, posts, setPosts, selectedFile) => {
    const fd = new FormData();
    fd.append('image', selectedFile, selectedFile.name)
    axios.post('/api/post/upload', fd, {
        onUploadProgress: progressEvent => {
            console.log('upload progress' + Math.round(progressEvent.loaded / progressEvent.total * 100) + '%')
        }
    }).then(res => {
        if(res && res.status === 200) {
            return storePost(
                {...newPost, attachment: res.data},
                    posts,
                    setPosts
                );
        }
    });
}

const storePost = async (newPost, posts, setPosts) => {
    const response = await PostService.createPost(newPost);
    if(response.status === 200) {
        newPost = {...newPost, id: response.data.post.id};
        setPosts([newPost, ...posts]);
    }
    return response;
}

import PostService from "../API/PostService";

export const addPostLike = async (postId, likeYet, setLikeYet, setLike) => {
    if(!likeYet) {
        const response = await PostService.addLikePost(postId);
        setLike(response.data);
        setLikeYet(true);
    }
}

export const createPost = async (newPost, posts, setPosts, selectedFile, setFilePreview) => {

    if(selectedFile.length) {
        console.log('1');
        return  createPostWithFile(newPost, posts, setPosts, selectedFile, setFilePreview)
    } else {
        console.log('2');
        return storePost(newPost, posts, setPosts)
    }
}

const createPostWithFile = async (newPost, posts, setPosts, selectedFile, setFilePreview) => {
    const fd = new FormData();
    if(selectedFile && selectedFile.length) {
        selectedFile.map((item, i) => {
            fd.append('image[]', item, item.name)
        })
    }
    console.log(selectedFile);
    axios.post('/api/post/upload', fd, {
        onUploadProgress: progressEvent => {
            console.log('upload progress' + Math.round(progressEvent.loaded / progressEvent.total * 100) + '%')
        }
    }).then(res => {
        if(res && res.status === 200) {

            const filePath = res.data.map(item => { return  item.replace('public', 'storage') })
            setFilePreview([]);
            return storePost(
                {...newPost, attachment: filePath},
                    posts,
                    setPosts
                );
        }
    });
}

const storePost = async (newPost, posts, setPosts) => {
    console.log(newPost);
    const response = await PostService.createPost(newPost);
    console.log(response);
    if(response.status === 200) {
        newPost = {...newPost, id: response.data.post.id};
        setPosts([newPost, ...posts]);
    }
    return response;
}

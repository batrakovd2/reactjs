import axios from "axios";

export default class PostService {
    static async getPosts(limit = 3, page = 1) {
        const response = await axios.post('/api/post/get/list?page=' + page, {
            params: {
                limit: limit
            }
        });
        return response;
    }

    static async getChildComments(id) {
        const response = await axios.post('/api/comment/get/child', {
            params: {
                id: id
            }
        });
        return response;
    }

    static async getParentComments(id, position) {
        const response = await axios.post('/api/comment/get/parent?page=' + position, {
            params: {
                id: id
            }
        });
        return response;
    }

    static async getParentCommentsCount(id) {
        const response = await axios.post('/api/comment/get/parent/count', {
            params: {
                id: id
            }
        });
        return response;
    }

    static async addLikePost(id) {
        const response = await axios.post('/api/post/add/like', {
            params: {
                id: id
            }
        });
        return (dispatch) => {
            dispatch(response)
        };
    }

    static async addLikeComment(id) {
        const response = await axios.post('/api/comment/add/like', {
            params: {
                id: id
            }
        });
        return response;
    }

    static async getPostById(id) {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/' + id);
        return response;
    }

    static async getPostCommentsById(id) {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/' + id + '/comments');
        return response;
    }

    static async createPost(post) {
        const response = await axios.post('/api/post/create',{
            ...post
        });
        return response;
    }

    static async createComment(comment) {
        const response = await axios.post('/api/comment/create',{
            ...comment
        });
        return response;
    }


}

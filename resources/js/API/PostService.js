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

    static async addLikePost(id) {
        const response = await axios.post('/api/post/add/like', {
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


}
const defaultState = [{
    id: 1,
    content: '',
    comments: [],
    like: 0,
    user_id: 1,
    attachment: "",
    user_name: "Emanuel",
    user_logo: "/uploads/users/img3.jpg"
}]

const ADD_POST_LIKE = 'ADD_POST_LIKE'
const SET_POSTS_LIST = 'SET_POSTS_LIST'
const CHANGE_CONTENT = 'CHANGE_CONTENT'
const CREATE_POST = 'CREATE_POST'

export const postReducer = (state = [], action) => {

    switch(action.type) {
        case ADD_POST_LIKE:
            const newStateLike = state.map((post) => {
                if(post.id == action.payload.id) {
                    post.like = post.like + 1
                }
                return post;
            })
            return newStateLike
        case SET_POSTS_LIST:
            return [...state, ...action.payload]
        case CHANGE_CONTENT:
            const newState = state.map((post) => {
                if(post.id == action.payload.id) {
                    post.content = action.payload.content
                }
            })
            return newState
        case CREATE_POST:

            return [action.payload, ...state]
        default:
            return state
    }
}

export const addPostLikeAction = (payload) => ({
    type: ADD_POST_LIKE, payload
})

export const setPostsList = (payload) => ({
    type: SET_POSTS_LIST, payload
})

export const createPost = (payload) => ({
    type: CREATE_POST, payload
})



const defaultState = {
    like: 0
}

const ADD_POST_LIKE = 'ADD_POST_LIKE'

export const postLikeReducer = (state = defaultState, action) => {
    switch(action.type) {
        case ADD_POST_LIKE:
            return {...state, like: state.like + 1}
        default:
            return state
    }
}

export const addPostLikeAction = (payload) => ({
    type: ADD_POST_LIKE, payload
})

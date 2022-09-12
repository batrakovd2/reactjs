import {createStore, combineReducers, applyMiddleware} from "redux";
import {likeReducer, postLikeReducer} from "./postLikeReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    postLike: postLikeReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))

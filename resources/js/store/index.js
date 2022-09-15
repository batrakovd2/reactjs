import {createStore, combineReducers, applyMiddleware} from "redux";
import {likeReducer, postLikeReducer} from "./postLikeReducer";
import thunk from "redux-thunk";
import {postReducer} from "./postReducer";

const rootReducer = combineReducers({
    postReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))

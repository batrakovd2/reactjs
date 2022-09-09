import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Posts from "../pages/Posts";
import About from "../pages/About";
import Navbar from "./UI/navbar/Navbar";
import Error from "../pages/Error";
import {Context} from "../context";
import {addCommentLike, changeShowLink, createComment, showChildComments, showParentComments} from "../utils/comments";
import {addPostLike, createPost} from "../utils/post";
import {createStore} from "redux";
import {Provider} from "react-redux";

const defaultState = {
    cache: 0
}

const reducer = (state = defaultState, action) => {
    switch(action.type) {
        case "ADD":
            return {...state, cache: state.cache + action}

        default:
            return state
    }
}

const store = createStore(reducer)

const AppRouter = () => {

    return(
        <Provider store={store}>
            <Context.Provider value={{showChildComments, addCommentLike, changeShowLink, addPostLike, createPost, createComment, showParentComments}}>
                <BrowserRouter >
                    <Navbar/>
                    <Switch>
                        <Route path="/about">
                            <About />
                        </Route>
                        <Route exact path="/">

                                <Posts />
                        </Route>
                        <Route path="*">
                            <Error />
                        </Route>
                    </Switch>
                </BrowserRouter >
            </Context.Provider>
        </Provider>

    );
}

export default AppRouter;

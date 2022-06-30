import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Posts from "../pages/Posts";
import About from "../pages/About";
import Navbar from "./UI/navbar/Navbar";
import Error from "../pages/Error";
import {Context} from "../context";
import {addCommentLike, changeShowLink, showChildComments} from "../utils/comments";

const AppRouter = () => {

    return(
        <Context.Provider value={{showChildComments, addCommentLike, changeShowLink}}>
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

    );
}

export default AppRouter;

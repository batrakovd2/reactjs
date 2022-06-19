import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import PostList from "../pages/PostList";
import About from "../pages/About";
import Navbar from "./UI/navbar/Navbar";
import Error from "../pages/Error";

const AppRouter = () => {
    return(
        <BrowserRouter >
            <Navbar/>
            <Switch>
                <Route path="/about">
                    <About />
                </Route>
                <Route exact path="/">
                    <PostList />
                </Route>
                <Route path="*">
                    <Error />
                </Route>
            </Switch>
        </BrowserRouter >

    );
}

export default AppRouter;
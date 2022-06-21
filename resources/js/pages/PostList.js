import React from "react";
import AddPostBlock from "../components/AddPostBlock";
import PostItem from "../components/PostItem";

const PostList = () => {
    return(
        <div className="feed-container">
            <AddPostBlock/>
            <PostItem />
        </div>
    );
}

export default PostList;



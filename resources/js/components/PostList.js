import React from 'react';
import PostItem from "./PostItem";
import {useSelector} from "react-redux";

const PostList = () => {

    const posts = useSelector(state => state.postReducer)

    return (
        <div>
            {posts.map((post, index) =>
                <PostItem number={index + 1} post={post} key={post.id + '_' + index} />
            )}
        </div>
    );
};

export default PostList;

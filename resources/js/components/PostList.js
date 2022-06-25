import React from 'react';
import PostItem from "./PostItem";

const PostList = ({posts}) => {
    if(!posts.length) {
        return (
            <h1 style={{textAlign: 'center'}}> Посты не найдены </h1>
        );
    }

    return (
        <div>
            {posts.map((post, index) =>
                <PostItem number={index + 1} post={post} key={post.id} />
            )}
        </div>
    );
};

export default PostList;

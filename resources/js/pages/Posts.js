import React, {useEffect, useState} from "react";
import AddPostBlock from "../components/AddPostBlock";
import PostItem from "../components/PostItem";
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";
import {getPagesCount} from "../utils/pages";
import PostList from "../components/PostList";

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(3);
    const [page, setPage] = useState(1);

    const [fetchPosts, isPostLoading, postError] = useFetching(async () => {
        const response = await PostService.getPosts(limit, page);
        setPosts([...posts, ...response.data]);
        const totalCount = response.headers['x-total-count'];
        setTotalPages(getPagesCount(totalCount, 3));
    });

    useEffect(() => {
        fetchPosts();
    }, [page])

    return(
        <div className="feed-container">
            <AddPostBlock/>
            <PostList posts={posts}/>
        </div>
    );
}

export default Posts;



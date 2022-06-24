import React, {useEffect, useRef, useState} from "react";
import AddPostBlock from "../components/AddPostBlock";
import PostItem from "../components/PostItem";
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";
import {getPagesCount} from "../utils/pages";
import PostList from "../components/PostList";
import Loader from "../components/UI/loader/Loader";

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(3);
    const [page, setPage] = useState(1);
    const lastElement = useRef();
    const observer = useRef();

    const [fetchPosts, isPostLoading, postError] = useFetching(async () => {
        const response = await PostService.getPosts(limit, page);
        setPosts([...posts, ...response.data]);
        const totalCount = response.headers['x-total-count'];
        setTotalPages(getPagesCount(totalCount, 3));
    });

    useEffect(() => {
        if(isPostLoading) return;
        if(observer.current) observer.current.disconnect()
        var callback = function(entries, observer) {
            if(entries[0].isIntersecting) {
                setPage(page + 1)
            }

        };
        observer.current = new IntersectionObserver(callback);
        observer.current.observe(lastElement.current)
    }, [isPostLoading])

    useEffect(() => {
        fetchPosts();
    }, [page])

    return(
        <div className="feed-container">
            <AddPostBlock/>
            <PostList posts={posts}/>
            <div ref={lastElement} style={{height: 20, background: 'red'}}></div>
            { isPostLoading  ?? <Loader /> }
        </div>
    );
}

export default Posts;



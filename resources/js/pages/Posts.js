import React, {useContext, useEffect, useRef, useState} from "react";
import AddPostBlock from "../components/AddPostBlock";
import PostItem from "../components/PostItem";
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";
import {getPagesCount} from "../utils/pages";
import PostList from "../components/PostList";
import Loader from "../components/UI/loader/Loader";
import {useObserver} from "../hooks/useObserver";
import {Context} from "../context";
import {useDispatch, useSelector} from "react-redux";
import {setPostsList} from "../store/postReducer";

const Posts = () => {
    const [postsOld, setPosts] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(5);
    const [page, setPage] = useState(1);
    const lastElement = useRef();
    const {createPost} = useContext(Context);

    const dispatch = useDispatch()
    const posts = useSelector(state => state.postReducer)

    const setPostList = (posts) => {
        dispatch(setPostsList(posts))
    }

    const [fetchPosts, isPostLoading, postError] = useFetching(async () => {
        const response = await PostService.getPosts(limit, page);
        console.log(response)
        setPostList(response.data.data)
        // setPosts([...posts, ...response.data.data]);
        const totalCount = response.data.total;
        setTotalPages(getPagesCount(totalCount, limit));
    });

    useObserver(lastElement, page < totalPages, isPostLoading, () => {
        setPage(page + 1);
    });

    useEffect(() => {
        fetchPosts();
    }, [page]);

    return(
        <div className="feed-container">
            <AddPostBlock create={createPost} posts={posts} setPosts={setPosts}  />
            {postError && <h1> Произошла ошибка ${postError}</h1> }
            <PostList posts={posts}/>
            { isPostLoading ? <Loader /> : '' }
            <div ref={lastElement} style={{height: 20, background: 'fff'}}></div>

        </div>
    );
}

export default Posts;



import React, {useContext, useState} from 'react';
import {getPagesCount} from "../utils/pages";
import PostService from "../API/PostService";
import CommentList from "./CommentList";
import UserBlock from "./UserBlock";
import {Context} from "../context";
import AddPostBlock from "./AddPostBlock";
import AddCommentBlock from "./AddCommentBlock";

const PostItem = (props) => {
    const [like, setLike] = useState(props.post.like);
    const [likeYet, setLikeYet] = useState(false);
    // const {createComment} = useContext(Context);
    const [posts, setPosts] = useState('')
    const [showAddComment, setShowAddComment] = useState(false);


    const {addPostLike} = useContext(Context);
    return (
        <div className="row">
            <div className="col-12">
                <div className="card card-post card-widget">
                    <div className="card-header">
                        <UserBlock post={props.post} user={props.post.user_name} />
                    </div>
                    <div className="card-body">
                        <p>
                            {props.post.content}
                        </p>
                        {
                            props.post.attachment.length && props.post.attachment[0]
                                ? props.post.attachment.map((item) => <img className="img-fluid" src={item} key={item} alt="Photo" />)
                                : ""
                        }

                    </div>
                    <div className="card-footer">
                        <div className="post-control">
                            <div className="post-control-left-wrapper">
                                <div className="post-like-control post-control-item">
                                    <span className={!like ? 'not-like material-symbols-outlined like-icon' : 'material-symbols-outlined like-icon'} onClick={() => addPostLike(props.post.id, likeYet, setLikeYet, setLike)}>
                                        favorite
                                    </span>
                                    <div>{like}</div>
                                </div>
                                <div className="post-share-control post-control-item">
                                    <span className="material-symbols-outlined">
                                    share
                                    </span>
                                </div>
                            </div>

                            <div className="float-right post-comment-control">
                                <span className="material-symbols-outlined" onClick={() => {console.log(showAddComment); setShowAddComment(!showAddComment)}}>
                                chat
                                </span>
                            </div>
                        </div>
                    </div>

                    <CommentList post={props.post} comments={props.post.comments} showAddComment={showAddComment} setShowAddComment={setShowAddComment} />

                </div>
            </div>

        </div>
    );
};

export default PostItem;

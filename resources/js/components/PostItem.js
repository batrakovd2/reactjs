import React, {useContext, useState} from 'react';
import {getPagesCount} from "../utils/pages";
import PostService from "../API/PostService";
import CommentList from "./CommentList";
import UserBlock from "./UserBlock";
import {Context} from "../context";

const PostItem = (props) => {
    const [like, setLike] = useState(props.post.like);
    const [likeYet, setLikeYet] = useState(false);

    const {addPostLike} = useContext(Context);

    return (
        <div className="row">
            <div className="col-12">
                <div className="card card-post card-widget">
                    <div className="card-header">
                        <UserBlock post={props.post} user={props.post.user_name} />
                    </div>
                    <div className="card-body">
                        {
                            props.post.attachment.length
                                ?   <img className="img-fluid pad" src={props.post.attachment} alt="Photo" />
                                : ""
                        }

                        <p>
                            {props.post.content}
                        </p>
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
                                <span className="material-symbols-outlined">
                                chat
                                </span>
                            </div>
                        </div>
                    </div>
                    { props.post.comments.length
                        ? <CommentList posts={props.post} comments={props.post.comments} />
                        : ''
                    }

                </div>
            </div>

        </div>
    );
};

export default PostItem;

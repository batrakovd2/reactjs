import React, {useState} from 'react';
import {getPagesCount} from "../utils/pages";
import PostService from "../API/PostService";

const PostItem = (props) => {
    const [like, setLike] = useState(props.post.like);
    let ddate = new Date(props.post.created_at);
    ddate = ddate.toLocaleDateString('ru-RU');
    const user = props.post.user;

    const addLike = async (postId) => {
        const response = await PostService.addLikePost(postId);
        setLike(response.data);
    }

    return (
        <div className="row">
            <div className="col-12">
                <div className="card card-post card-widget">
                    <div className="card-header">
                        <div className="user-block">
                            <div className="img-wrap">
                                <img className="img-circle user-logo" src={user.logo} alt="User Image" />
                                <span className="user-name">{user.last_name + ' ' + user.name}</span>
                            </div>
                            <div className="post-right-tools">
                                <span className="description">{ddate}</span>
                                <div className="card-tools">
                                    <span className="material-symbols-outlined"> more_vert </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-body">
                        <img className="img-fluid pad" src={props.post.attachment} alt="Photo" />
                        <p>
                            {props.post.content}
                        </p>
                    </div>
                    <div className="card-footer">
                        <div className="post-control">
                            <div className="post-control-left-wrapper">
                                <div className="post-like-control post-control-item">
                                    <span className={!like ? 'not-like material-symbols-outlined like-icon' : 'material-symbols-outlined like-icon'} onClick={() => addLike(props.post.id)}>
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
                </div>
            </div>

        </div>
    );
};

export default PostItem;

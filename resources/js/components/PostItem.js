import React, {useState} from 'react';
import {getPagesCount} from "../utils/pages";

const PostItem = (props) => {
    let ddate = new Date(props.post.created_at);
    ddate = ddate.toLocaleDateString('ru-RU');

    return (
        <div className="row">
            <div className="col-12">
                <div className="card card-post card-widget">
                    <div className="card-header">
                        <div className="user-block">
                            <div className="img-wrap">
                                <img className="img-circle" src="" alt="User Image" />
                                <span className="user-name"><a href="#">Jonathan Burke Jr.</a></span>
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
                                    <span className="material-symbols-outlined">
                                        favorite
                                    </span>
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

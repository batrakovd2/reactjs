import React from 'react';
import UserBlock from "./UserBlock";

const CommentItem = (props) => {
    console.log(props)
    const like = props.comment.like;
    return (
        <div className="card-comment">
            <div className="comment-body">
                <UserBlock post={props.comment} user={props.comment.user} />
                <div className="comment-text">
                    {props.comment.content}
                </div>
                <div className="comment__controls">

                    <div className="comment-like-control comment-control-item">
                                    <span className={!like ? 'not-like material-symbols-outlined like-icon' : 'material-symbols-outlined like-icon'} >
                                        favorite
                                    </span>
                        <div>{like}</div>
                    </div>
                    <div className="comment__controls-inner">
                        <div className="button_link comment__control" data-type="create"></div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default CommentItem;

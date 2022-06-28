import React from 'react';
import UserBlock from "./UserBlock";

const CommentItem = (props) => {
    console.log(props)
    return (
        <div className="card-comment">
            <div className="comment-body">

                <UserBlock post={props.comment} user={props.comment.user} />
                <div className="comment-text">
                    {props.comment.content}
                </div>
                <div className="comment__controls">
                    <div className="comment__controls-inner">
                        <div className="button_link comment__control" data-type="create"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CommentItem;

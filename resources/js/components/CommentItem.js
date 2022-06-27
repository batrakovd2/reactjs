import React from 'react';

const CommentItem = (props) => {
    return (
        <div>
            <div className="comment-body">
                <img className="img-circle img-sm user-logo" src="https://picsum.photos/128" alt="User Image" />
                <div className="comment-text">
                        <span className="username">
                            Maria Gonzales
                            <span className="text-muted float-right">8:03 PM Today</span>
                        </span>
                    It is a long established fact that a reader will be distracted
                    by the readable content of a page when looking at its layout.
                </div>
                <div className="comment__controls">
                    <div className="comment__controls-inner">
                        <div className="button_link comment__control" >

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CommentItem;

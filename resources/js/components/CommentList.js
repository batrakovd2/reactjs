import React, {useContext, useState} from 'react';
import PostItem from "./PostItem";
import CommentItem from "./CommentItem";
import AddCommentBlock from "./AddCommentBlock";
import {Context} from "../context";

const CommentList = (props) => {
    const [comments, setComments] = useState(props.comments);
    const {createComment} = useContext(Context);

    return (
        <div className="card-footer card-comments">
            {comments.map((comment, index) =>
                <CommentItem number={index + 1} comment={comment} key={comment.id}  setComment={setComments} />
            )}
            {comments.length >= 3
                ? <div className="comment-show">Показать еще</div>
                : ''
            }
            { props.showAddComment
                ? <AddCommentBlock create={createComment} post={props.post} comments={comments} setComments={setComments} />
                : ""
            }
        </div>
    );
};

export default CommentList;

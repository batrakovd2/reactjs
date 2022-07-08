import React, {useState} from 'react';
import PostItem from "./PostItem";
import CommentItem from "./CommentItem";

const CommentList = (props) => {
    const [comments, setComment] = useState(props.comments);

    return (
        <div className="card-footer card-comments">
            {comments.map((comment, index) =>
                <CommentItem number={index + 1} comment={comment} key={comment.id}  />
            )}
            {props.posts.commentCount > 3
                ?? <div className="comment-show">Показать еще</div>
            }
        </div>
    );
};

export default CommentList;

import React, {useContext, useState} from 'react';
import PostItem from "./PostItem";
import CommentItem from "./CommentItem";
import AddCommentBlock from "./AddCommentBlock";
import {Context} from "../context";
import LoaderMini from "./UI/loader/LoaderMini";

const CommentList = (props) => {
    const [comments, setComments] = useState(props.comments);
    const [position, setPosition] = useState(2);
    const [isLoading, setIsLoading] = useState(false);
    const {createComment} = useContext(Context);
    const {showParentComments} = useContext(Context);

    return (
        <div className="card-footer card-comments">
            {comments.map((comment, index) =>
                <CommentItem number={index + 1} comment={comment} key={comment.id + '_' + index} post={props.post} setComment={setComments} />
            )}
            {props.post.commentsCount >= 3 && comments.length < props.post.commentsCount
                ? <div className="comment-show" onClick={() => {
                        showParentComments(props.post, comments, setComments, position, setIsLoading)
                        setPosition(position + 1);
                    }
                } >Показать еще</div>
                : ''
            }
            { isLoading ? <LoaderMini /> : '' }
            { props.showAddComment
                ? <AddCommentBlock create={createComment} post={props.post} comments={comments} setComments={setComments} />
                : ""
            }
        </div>
    );
};

export default CommentList;

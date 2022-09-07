import React, {useContext, useEffect, useState} from 'react';
import UserBlock from "./UserBlock";
import PostService from "../API/PostService";
import Loader from "./UI/loader/LoaderMini";
import LoaderMini from "./UI/loader/LoaderMini";
import {Context} from "../context";
import {addCommentLike, changeShowLink} from "../utils/comments";
import AddCommentBlock from "./AddCommentBlock";

const CommentItem = (props) => {

    props.comment.child = [];
    const [comment, setComment] = useState(props.comment);
    const [commentShow, setCommentShow] = useState({visible: false, title: 'Показать еще ' + comment.child_count});
    const [like, setLike] = useState(props.comment.like);
    const [likeYet, setLikeYet] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [visibleClass, setvisibleClass] = useState('comment__children');
    const [showAddChildComment, setShowAddChildComment] = useState(false)

    const {showChildComments} = useContext(Context);
    const {changeShowLink} = useContext(Context);
    const {addCommentLike} = useContext(Context);
    const {createComment} = useContext(Context);

    const showComments = () => {
        showChildComments(
            comment,
            setComment,
            setIsLoading
        );
        changeShowLink(
            comment,
            commentShow,
            setCommentShow,
            visibleClass,
            setvisibleClass
        );
    }

    return (
        <div className="card-comment">
            <div className="comment-body">
                <UserBlock post={comment} user={comment.user} />
                <div className="comment-text">
                    {comment.content}
                </div>
                <div className="comment__controls">
                    <div className="comment-like-control comment-control-item">
                        <span className={!like ? 'not-like material-symbols-outlined like-icon' : 'material-symbols-outlined like-icon'}
                              onClick={() => addCommentLike(comment, likeYet, setLike, setLikeYet)} >
                            favorite
                        </span>
                        <div>{like}</div>
                    </div>
                    <div className="comment__controls-inner">
                        <div className="button_link reply-btn comment__control" data-type="create" onClick={() => setShowAddChildComment(!showAddChildComment)}></div>
                    </div>
                    { comment.child_count
                        ? <div className="comment-show" onClick={() => {showComments()}}>
                            {commentShow.title}
                        </div>
                        : ''
                    }
                    { isLoading ? <LoaderMini /> : '' }
                </div>
                { comment.child && comment.child.length
                ?
                    <div className={visibleClass}>
                        {comment.child.map((comm, index) =>
                            <CommentItem number={index + 1} comment={comm} key={comm.id} post={props.post} />
                        )}
                    </div>
                    : ''
                }
                { showAddChildComment
                    ? <AddCommentBlock create={createComment} post={props.post} comments={[comment]} setComments={setComment} isChild={true} setShowAddChildComment={setShowAddChildComment} />
                    : ""
                }
            </div>

        </div>

    );
};

export default CommentItem;

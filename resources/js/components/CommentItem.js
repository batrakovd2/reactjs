import React, {useState} from 'react';
import UserBlock from "./UserBlock";
import PostService from "../API/PostService";

const CommentItem = (props) => {

    const like = props.comment.like;
    props.comment.child = [];
    const [comment, setComment] = useState(props.comment);
    console.log(comment);
    const showChildComments = async (comId) => {
        const response = await PostService.getChildComments(comId);
        props.comment.child = response['data'];
        console.log(props.comment);
        setComment(props.comment)

        // props.showChild(response['data']);
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
                        <span className={!like ? 'not-like material-symbols-outlined like-icon' : 'material-symbols-outlined like-icon'} >
                            favorite
                        </span>
                        <div>{like}</div>
                    </div>
                    <div className="comment__controls-inner">
                        <div className="button_link comment__control" data-type="create"></div>
                    </div>
                    { comment.child_count
                        ? <div className="comment-show" onClick={() => { showChildComments(comment.id) }}>Показать еще {comment.child_count}</div>
                        : ''
                    }
                </div>
                { comment.child.length
                ?
                    <div className="comment__children">
                        {comment.child.map((comm, index) =>
                            <CommentItem number={index + 1} comment={comm} key={comm.id} />
                        )}
                    </div>
                    : ''
                }
            </div>
            {/*{ props.comment.parent_id != 0*/}
            {/*??*/}
            {/*    {props.comment.map((comment, index) => {*/}
            {/*                <div className="comment__children">*/}
            {/*                    <CommentItem number={index + 1} comment={comment} key={comment.id}*/}
            {/*                                 showChild={addChildComments}/>*/}
            {/*                </div>*/}
            {/*            }*/}
            {/*        )}*/}
            {/*    */}
            {/*}*/}

        </div>

    );
};

export default CommentItem;

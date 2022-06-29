import React, {useState} from 'react';
import PostItem from "./PostItem";
import CommentItem from "./CommentItem";

const CommentList = (props) => {
    const [comments, setComment] = useState(props.comments);
    const addChildComments = (newComments) => {
        setComment([...comments]);
    }

    return (
        <div className="card-footer card-comments">
            {comments.map((comment, index) =>
                <CommentItem number={index + 1} comment={comment} key={comment.id} showChild={addChildComments} />
            )}
            {props.posts.commentCount > 3
                ?? <div className="comment-show">Показать еще</div>
            }

            {/*<div className="card-comment">*/}
            {/*    <div className="comment-body">*/}
            {/*        <div className="user-block">*/}
            {/*            <div className="img-wrap"><img className="img-circle user-logo" src="/uploads/users/img4.jpg" alt="User Image" />*/}
            {/*                <span className="user-name">Goodwin Tyrese</span>*/}
            {/*            </div>*/}
            {/*            <div className="post-right-tools">*/}
            {/*                <span className="description">10/10/2022</span>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*        <div className="comment-text">*/}
            {/*            It is a long established fact that a reader will be distracted*/}
            {/*            by the readable content of a page when looking at its layout.*/}
            {/*        </div>*/}
            {/*        <div className="comment__controls">*/}
            {/*            <div className="comment__controls-inner">*/}
            {/*                <div className="button_link comment__control" data-type="create">*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    <div className="comment__children">*/}
            {/*        <div className="comment-body">*/}
            {/*            <img className="img-circle user-logo img-sm" src="https://picsum.photos/128" alt="User Image" />*/}
            {/*            <div className="comment-text">*/}
            {/*                <span className="username">*/}
            {/*                    Maria Gonzales*/}
            {/*                    <span className="text-muted float-right">8:03 PM Today</span>*/}
            {/*                </span>*/}
            {/*                It is a long established fact that a reader will be distracted*/}
            {/*                by the readable content of a page when looking at its layout.*/}
            {/*            </div>*/}
            {/*            <div className="comment__controls">*/}
            {/*                    <div className="comment__controls-inner">*/}
            {/*                        <div className="button_link comment__control" data-type="create"></div>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*        </div>*/}
            {/*        <div className="comment__children">*/}
            {/*            <div className="comment-body">*/}
            {/*                <img className="img-circle user-logo img-sm" src="https://picsum.photos/128" alt="User Image" />*/}
            {/*                <div className="comment-text">*/}
            {/*                    <span className="username">*/}
            {/*                        Maria Gonzales*/}
            {/*                        <span className="text-muted float-right">8:03 PM Today</span>*/}
            {/*                    </span>*/}
            {/*                    It is a long established fact that a reader will be distracted*/}
            {/*                    by the readable content of a page when looking at its layout.*/}
            {/*                </div>*/}
            {/*                <div className="comment__controls">*/}
            {/*                        <div className="comment__controls-inner">*/}
            {/*                            <div className="button_link comment__control" data-type="create"></div>*/}
            {/*                        </div>*/}
            {/*                    </div>*/}
            {/*            </div>*/}
            {/*            <div className="comment__children">*/}
            {/*                <div className="comment-body">*/}
            {/*                    <img className="img-circle img-sm" src="https://picsum.photos/128" alt="User Image" />*/}
            {/*                    <div className="comment-text">*/}
            {/*                                        <span className="username">*/}
            {/*                                            Maria Gonzales*/}
            {/*                                            <span*/}
            {/*                                                className="text-muted float-right">8:03 PM Today</span>*/}
            {/*                                        </span>*/}
            {/*                        It is a long established fact that a reader will be distracted*/}
            {/*                        by the readable content of a page when looking at its layout.*/}
            {/*                    </div>*/}
            {/*                    <div className="comment__controls">*/}
            {/*                            <div className="comment__controls-inner">*/}
            {/*                                <div className="button_link comment__control" data-type="create"></div>*/}
            {/*                            </div>*/}
            {/*                        </div>*/}
            {/*                </div>*/}
            {/*                <div className="comment-body">*/}
            {/*                    <img className="img-circle img-sm" src="https://picsum.photos/128" alt="User Image" />*/}
            {/*                    <div className="comment-text">*/}
            {/*                                        <span className="username">*/}
            {/*                                            Maria Gonzales*/}
            {/*                                            <span*/}
            {/*                                                className="text-muted float-right">8:03 PM Today</span>*/}
            {/*                                        </span>*/}
            {/*                        It is a long established fact that a reader will be distracted*/}
            {/*                        by the readable content of a page when looking at its layout.*/}
            {/*                    </div>*/}
            {/*                    <div className="comment__controls">*/}
            {/*                            <div className="comment__controls-inner">*/}
            {/*                                <div className="button_link comment__control" data-type="create"></div>*/}
            {/*                            </div>*/}
            {/*                        </div>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*<div className="card-comment">*/}
            {/*    <img className="img-circle user-logo img-sm" src="https://picsum.photos/128" alt="User Image" />*/}
            {/*    <div className="comment-text">*/}
            {/*            <span className="username">*/}
            {/*                Nora Havisham*/}
            {/*                <span className="text-muted float-right">8:03 PM Today</span>*/}
            {/*            </span>*/}
            {/*            The point of using Lorem Ipsum is that it hrs a morer-less*/}
            {/*            normal distribution of letters, as opposed to using*/}
            {/*            'Content here, content here', making it look like readable English.*/}
            {/*        </div>*/}
            {/*</div>*/}
        </div>
    );
};

export default CommentList;

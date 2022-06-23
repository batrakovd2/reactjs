import React from 'react';

const PostItem = (props) => {
    console.log(props);
    return (
        <div className="row">
            <div className="col-12">
                <div className="card card-post card-widget">
                    <div className="card-header">
                        <div className="user-block">
                            <div className="img-wrap">
                                <img className="img-circle" src="https://picsum.photos/50" alt="User Image" />
                                <span className="user-name"><a href="#">Jonathan Burke Jr.</a></span>
                            </div>
                            <div className="post-right-tools">
                                <span className="description">15:00 22.06.2022</span>
                                <div className="card-tools">
                                    <span className="material-symbols-outlined"> more_vert </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-body">
                        <img className="img-fluid pad" src="https://picsum.photos/50" alt="Photo" />
                        <p>
                            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at

                            the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
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

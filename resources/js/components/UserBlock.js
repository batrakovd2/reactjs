import React from 'react';

const UserBlock = (props) => {

    const user = props.post.user;

    return (
        <div className="user-block">
            <div className="img-wrap">
                <img className="img-circle user-logo" src={props.post.user_logo} alt="User Image" />
                <span className="user-name">{props.post.user_name}</span>
            </div>
        </div>
    );
};

export default UserBlock;

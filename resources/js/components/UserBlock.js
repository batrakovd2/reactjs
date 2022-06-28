import React from 'react';

const UserBlock = (props) => {

    const user = props.post.user;

    return (
        <div className="user-block">
            <div className="img-wrap">
                <img className="img-circle user-logo" src={user.logo} alt="User Image" />
                <span className="user-name">{user.last_name + ' ' + user.name}</span>
            </div>
        </div>
    );
};

export default UserBlock;

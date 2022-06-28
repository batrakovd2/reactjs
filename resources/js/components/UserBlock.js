import React from 'react';

const UserBlock = (props) => {

    let ddate = new Date(props.post.created_at);
    ddate = ddate.toLocaleDateString('ru-RU');
    const user = props.post.user;

    return (
        <div className="user-block">
            <div className="img-wrap">
                <img className="img-circle user-logo" src={user.logo} alt="User Image" />
                <span className="user-name">{user.last_name + ' ' + user.name}</span>
            </div>
            <div className="post-right-tools">
                <span className="description">{ddate}</span>
                <div className="card-tools">
                    <span className="material-symbols-outlined"> more_vert </span>
                </div>
            </div>
        </div>
    );
};

export default UserBlock;

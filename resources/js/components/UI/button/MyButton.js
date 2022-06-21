import React from 'react';
import cls from './MyButton.module.css';

const MyButton = ({children, ...props}) => {
    return (
        <button className={cls.MyButton} {...props} >
            {children}
        </button>
    );
}

export default MyButton;

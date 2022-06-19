import React from 'react';
import cls from './MyInput.module.css';

function MyInput(props) {
    return (
        <input className={cls.MyInput} {...props} />
    );
}

export default MyInput;

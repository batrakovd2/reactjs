import React from 'react';
import cls from './LoaderMini.module.css';

const LoaderMini = () => {
    return (
        <div>
            <div className={cls.lds_circle}>
                <div></div>
            </div>
        </div>
    );
};

export default LoaderMini;

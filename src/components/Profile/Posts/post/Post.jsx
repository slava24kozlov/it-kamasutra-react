import React from 'react';
import p from './Post.module.css';

const Post = () => {
    return (
        <div className={p.main}>
            <div className={p.item}>
                <img src="https://rcmi.fiu.edu/wp-content/uploads/sites/88/2019/08/avatar-1577909__340.png"
                     alt="image avatar"/>
                post 1
            </div>
            <span className={p.like}>
                Like
            </span>
        </div>
    );
};
export default Post;

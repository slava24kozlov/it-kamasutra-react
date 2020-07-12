import React from 'react';
import p from './Post.module.css';

const Post = (props) => {
    return (
        <div className={p.main}>
            <div className={p.item}>
                <img src="https://rcmi.fiu.edu/wp-content/uploads/sites/88/2019/08/avatar-1577909__340.png"
                     alt="image avatar"/>
                <i>{props.messanger} || <small>{props.autor}</small></i>
            </div>
            <span className={p.like}>
                Like {props.countLike}
            </span>
        </div>
    );
};
export default Post;

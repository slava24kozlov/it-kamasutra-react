import React from 'react';
import p from './Post.module.css';

const Post = (props) => {
    return (
        <div className={p.main}>
            <div className={p.item}>
                <img src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
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

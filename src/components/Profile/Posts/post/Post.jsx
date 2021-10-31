import React from 'react';
import p from './Post.module.css';

const Post = (props) => {
    return (
        <div className={p.main}>
            <div className={p.item}>
                <span>{`${props.id})`}</span>
                <img src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
                     alt="avatar"/>
                <i>{props.message} || <small>{props.autor}</small></i>
            </div>
            <span className={p.like}>
                Like {props.like}
            </span>
        </div>
    );
};
export default Post;

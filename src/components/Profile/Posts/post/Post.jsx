import React from 'react';
import p from './Post.module.scss';

const Post = (props) => {
  return (
    <li className={p.main}>
      <div className={p.content}>
        <img src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
             alt="avatar"/>
        <i>{props.message} || <small>{props.autor}</small></i>
      </div>
      <p>Like {props.like}</p>
    </li>
  );
};
export default Post;

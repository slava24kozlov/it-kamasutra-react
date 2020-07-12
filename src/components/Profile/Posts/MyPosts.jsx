import React from 'react';
import p from './MyPosts.module.css';
import Post from './post/Post';

const MyPosts = () => {
    return (
        <div className={p.main}>
            <div>
                My posts
            </div>
            <div>
                <textarea>enter post</textarea>
                <button>Add post</button>
            </div>
            <Post messanger="This is my first post" autor="Slava Nelson" countLike="23"/>
            <Post messanger="My favorite actor is Will Smith" autor="Vlad Lenon" countLike="1"/>
        </div>
    );
};
export default MyPosts;

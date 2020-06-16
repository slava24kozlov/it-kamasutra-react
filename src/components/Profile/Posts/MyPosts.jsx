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
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <Post/>
        </div>
    );
};
export default MyPosts;

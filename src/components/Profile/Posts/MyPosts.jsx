import React from 'react';
import p from './MyPosts.module.css';
import Post from './post/Post';

let postData = [
    {message: "This is my first post", author: "Slava Nelson", like: "23"},
    {message: "My favorite actor is Will Smith", author: "Vlad Lenon", like: "5"}
]


let postElement = postData.map
    (el => <Post message={el.message} autor={el.author} like={el.like}/>)

const MyPosts = () => {
    return (
        <div className={p.main}>
            <h3>My posts</h3>
            <div>
                <textarea>enter post</textarea>
            </div>
            <div>
                <button>Add post</button>
            </div>
            <div className={p.post}>
                {postElement}
            </div>
        </div>
    );
};
export default MyPosts;

import React from 'react';
import p from './MyPosts.module.css';
import Post from './post/Post';


const MyPosts = (props) => {
    let postElement = props.post.map(el => <Post message={el.message} autor={el.author} like={el.like}/>)
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

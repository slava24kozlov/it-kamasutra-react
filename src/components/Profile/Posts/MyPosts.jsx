import React from 'react';
import p from './MyPosts.module.css';
import Post from './post/Post';

const MyPosts = (props) => {
    let postElement = props.posts.map(el => <Post message={el.message} autor={el.author} like={el.like}/>);
    let linkTextArea = React.createRef();

    let addPost = () => {
        props.setPost(linkTextArea.current.value);
    }

    let updatePostText = () => {
        props.updatePostText(linkTextArea.current.value);
    }

    return (
        <div className={p.main}>
            <h3>My posts</h3>
            <div>
                <textarea ref={linkTextArea} onChange={updatePostText} value={props.newPostText}/>
            </div>
            <div>
                <button onClick={addPost}>Add post</button>
            </div>
            <div className={p.post}>
                {postElement}
            </div>
        </div>
    );
};
export default MyPosts;

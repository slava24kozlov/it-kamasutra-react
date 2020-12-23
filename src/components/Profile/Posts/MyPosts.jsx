import React from 'react';
import p from './MyPosts.module.css';
import Post from './post/Post';
import {actionCreatorSetPost, actionCreatorUpdatePostText} from '../../../redux/store';

const MyPosts = (props) => {
    let postElement = props.posts.map(el => <Post message={el.message} autor={el.author} like={el.like}/>);
    let linkPosts = React.createRef();

    let addPost = () => {
        props.dispatch(actionCreatorSetPost());
    }

    let updatePostText = () => {
        props.dispatch(actionCreatorUpdatePostText(linkPosts.current.value));
    }

    return (
        <div className={p.main}>
            <h3>My posts</h3>
            <div>
                <textarea ref={linkPosts} onChange={updatePostText} value={props.newPostText}/>
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

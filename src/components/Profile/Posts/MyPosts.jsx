import React from 'react';
import p from './MyPosts.module.css';
import Post from './post/Post';
import {actionCreatorSetPost, actionCreatorUpdatePostText, actionCreatorUpdateCountLike} from '../../../redux/reducer/ProfileReducer';

const MyPosts = (props) => {
    let postElement = props.profilePage.postData.map(el => <Post message={el.message} autor={el.author} like={el.like}/>);
    let linkPosts = React.createRef();
    let linkLikes = React.createRef();

    let addPost = () => {
        props.dispatch(actionCreatorSetPost());
    }

    let updatePostText = () => {
        props.dispatch(actionCreatorUpdatePostText(linkPosts.current.value));
    }

    let updateLikeText = () => {
        props.dispatch(actionCreatorUpdateCountLike(linkLikes.current.value));
    }

    return (
        <div className={p.main}>
            <h3>My posts</h3>
            <div>
                <h1>Enter new post</h1>
                <textarea className={p.updatePost} ref={linkPosts} onChange={updatePostText}
                          value={props.profilePage.newPostText}/>
            </div>
            <div>
                <h1>Enter count likes</h1>
                <textarea className={p.updateLikes} ref={linkLikes} onChange={updateLikeText}
                          value={props.profilePage.newCountLike}/>
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

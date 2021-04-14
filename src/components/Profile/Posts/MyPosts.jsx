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
            <div className={p.menu}>
            <div>
                <p className={p.text}>Enter new post</p>
                <textarea className={p.textareaPost} ref={linkPosts} onChange={updatePostText}
                          value={props.profilePage.newPostText}/>
            </div>
            <div>
                <p className={p.text}>Enter count likes</p>
                <textarea className={p.textareaLikes} ref={linkLikes} onChange={updateLikeText}
                          value={props.profilePage.newCountLike}/>
            </div>
            <div>
                <button onClick={addPost}>Add post</button>
            </div>
            </div>
            <div className={p.posts}>
                {postElement}
            </div>
        </div>
    );
};
export default MyPosts;

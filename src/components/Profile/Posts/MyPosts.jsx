import React from 'react';
import p from './MyPosts.module.css';
import Post from './post/Post';


const MyPosts = (props) => {
    let postElement = props.postData.map(el => <Post key={el.id} message={el.message} autor={el.author} like={el.like}/>);
    let linkPosts = React.createRef();
    let linkLikes = React.createRef();

    return (
        <div className={p.main}>
            <div className={p.menu}>
            <div>
                <p className={p.text}>Enter new post</p>
                <textarea className={p.textareaPost}
                          ref={linkPosts}
                          onChange={() => props.updatePostText(linkPosts.current.value)}
                          value={props.newPostText}/>
            </div>
            <div>
                <p className={p.text}>Enter count likes</p>
                <textarea className={p.textareaLikes}
                          ref={linkLikes}
                          onChange={() => props.updateLikeText(linkLikes.current.value)}
                          value={props.newCountLike}/>
            </div>
            <div>
                <button onClick={props.addPost}>Add post</button>
            </div>
            </div>
            <div className={p.posts}>
                {postElement}
            </div>
        </div>
    );
};
export default MyPosts;

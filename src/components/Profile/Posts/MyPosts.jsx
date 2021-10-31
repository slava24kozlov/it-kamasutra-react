import React from 'react';
import p from './MyPosts.module.scss';
import Post from './post/Post';
import {useForm} from "react-hook-form";

const MyPosts = (props) => {
  let postElement = props.postData.map(el => <Post key={el.id} id={el.id} message={el.message} autor={el.author} like={el.like}/>);

  const {register, handleSubmit} = useForm();

  const onSubmit = ({post, like}) => {
    props.setPostAC(post, like)
  }

  const handleFocus = (event) => {
    event.target.select()
  }

  return (
    <div className={p.main}>
      <div className={p.menu}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={p.fields}>
            <label>Enter new post</label>
            <input
              type="text"
              {...register("post", {required: true})}
              onFocus={handleFocus}
              defaultValue={props.postText}
            />
            <label>Enter count likes</label>
            <input
              type="number" min="1" max="10"
              {...register("like", {required: true})}
              defaultValue={props.countLike}
            />
          </div>
          <button type="submit">Add post</button>
        </form>
      </div>
      <div className={p.posts}>
        {postElement}
      </div>
    </div>
  );
};
export default MyPosts;

import React from 'react';
import p from './MyPosts.module.scss';
import Post from './post/Post';
import {useForm} from "react-hook-form";
import FieldWrapper from "../../common/Wrappers/FieldWrapper";

const MyPosts = (props) => {
  let postElement = props.postData.map(el => <Post key={el.id} id={el.id} message={el.message} autor={el.author}
                                                   like={el.like}/>);

  const {register, handleSubmit, formState: {errors, touchedFields}} = useForm();

  const onSubmit = ({post, like}) => {
    props.setPostAC(post, like)
  }

  const handleFocus = (event) => {
    event.target.select()
  }

  return (
    <div className={p.main}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={p.fields}>
          <FieldWrapper label="Enter new post" error={errors.post} touched={touchedFields.post}>
            <input
              type="text"
              {...register('post', {
                required: {value: true, message: 'Text required'},
                minLength: {value: 3, message: 'Text length < 3'},
                maxLength: {value: 10, message: 'Text length > 10'},
              })}
              onFocus={handleFocus}
              defaultValue={props.postText}
            />
          </FieldWrapper>
          <FieldWrapper label="Enter count likes" error={errors.like} touched={touchedFields.like}>
            <input
              type="number"
              min="1"
              max="10"
              {...register('like', {
                required: {value: true, message: 'Value required'},
                min: {value: 3, message: 'Min value 3'},
                max: {value: 10, message: 'Max value 10'},
              })}
              defaultValue={props.countLike}
            />
          </FieldWrapper>
        </div>
        <button type="submit">Add post</button>
      </form>
      <ol className={p.posts}>
        {postElement}
      </ol>
    </div>
  );
};
export default MyPosts;

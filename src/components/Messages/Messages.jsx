import React from 'react';
import {useForm} from "react-hook-form";
import style from './Messages.module.scss';
import Dialog from "./components/Dialog";
import Message from "./components/Message";

const Messages = (props) => {
  let dialogElement = props.dialogData.map(d => <Dialog key={d.id} id={d.id} name={d.name} image={d.image}/>);
  let messageElement = props.messagesData.map(e => <Message key={e.id} id={e.id} message={e.message}/>);

  const {register, handleSubmit} = useForm();

  window.form = useForm();
  console.log(`Name: ${props.name}`)
  console.log(`Message: ${props.message}`)

  const onSubmit = ({name, message}) => {
    props.setMessageAC(name, message)
    props.resetState()
  }

  const handleChange = (event) => {
    console.log(event)
    props.updateState(event.currentTarget.name, event.currentTarget.value)
  }

  return (
    <div className={style.main}>
      <section>
        <div className={style.dialogs}>
          {dialogElement}
        </div>
        <div className={style.messages}>
          {messageElement}
        </div>
      </section>
      <form id="messagesForm" onSubmit={handleSubmit(onSubmit)}>
        <div className={style.fields}>
          <input type="text"
                 {...register("name", {required: true})}
                 onChange={handleChange}
                 value={props.name}
                 placeholder="Enter name"
          />
          <input type="text"
                 {...register("message", {required: true})}
                 onChange={handleChange}
                 value={props.message}
                 placeholder="Enter message"
          />
        </div>
        <button
          type="submit"
          disabled={!props.name || !props.message}
        >
          Click
        </button>
      </form>
    </div>
  );
}

export default Messages;

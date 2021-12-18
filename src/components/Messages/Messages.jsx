import React from 'react';
import {useForm} from "react-hook-form";
import style from './Messages.module.scss';
import Dialog from "./components/Dialog";
import Message from "./components/Message";

const Messages = (
  {
    dialogData,
    messagesData,
    fieldDialog,
    fieldMessage,
    updateField,
    resetFields,
    setMessageAC
  }
) => {
  let dialogElement = dialogData.map(d => <Dialog key={d.id} id={d.id} name={d.name} image={d.image}/>);
  let messageElement = messagesData.map(e => <Message key={e.id} id={e.id} message={e.message}/>);

  const {register, handleSubmit} = useForm();

  const handleChange = (event) => {
    updateField(event.target.name, event.target.value)
  }

  const onSubmit = ({dialog, message}) => {
    setMessageAC(dialog, message)
    resetFields()
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
      <form id="messagesForm" onSubmit={handleSubmit(onSubmit)} onChange={handleChange}>
        <textarea
          type="text"
          {...register('dialog', {required: 'field is empty'})}
          value={fieldDialog}
          placeholder="Enter name"
        />
        <textarea
          type="text"
          {...register('message', {required: 'field is empty'})}
          value={fieldMessage}
          placeholder="Enter message"
        />
        <button type="submit" disabled={!fieldDialog && !fieldMessage}>Click</button>
      </form>
    </div>
  );
}

export default Messages;

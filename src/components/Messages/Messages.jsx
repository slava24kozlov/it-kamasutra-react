import React from 'react';
import style from './Messages.module.scss';
import {useForm} from "react-hook-form";
import Wrapper from "../common/Wrappers/WrapperComponents";

const Messages = (
  {
    dataMessages,
    fieldDialog,
    fieldMessage,
    updateField,
    resetFields,
    setMessage
  }
) => {
  const {register, handleSubmit} = useForm();

  const handleChange = (event) => {
    updateField(event.target.name, event.target.value)
  }

  const onSubmit = ({dialog, message}) => {
    setMessage(dialog, message)
    resetFields()
  }

  return (
    <Wrapper title="DIALOGS">
      <div className={style.main}>
        <table>
          <thead>
          <tr>
            <th>Users</th>
            <th>Messages</th>
          </tr>
          </thead>
          <tbody>
          {dataMessages.map(({key, name, image, message}) =>
            <tr key={key}>
              <td><img src={image} alt={`avatar ${name}`} width="25" height="25"/><span>{name}</span></td>
              <td>{message}</td>
            </tr>)}
          </tbody>
        </table>

        <form id="messagesForm" onSubmit={handleSubmit(onSubmit)} onChange={handleChange}>
          <textarea
            {...register('dialog', {required: 'field is empty'})}
            value={fieldDialog}
            placeholder="Enter name"
          />
          <textarea
            {...register('message', {required: 'field is empty'})}
            value={fieldMessage}
            placeholder="Enter message"
          />
          <button type="submit" disabled={!fieldDialog || !fieldMessage}>Click</button>
        </form>
      </div>
    </Wrapper>
  );
}

export default Messages;

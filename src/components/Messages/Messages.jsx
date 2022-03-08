import React from 'react';
import style from './Messages.module.scss';
import {useForm} from "react-hook-form";
import Wrapper from "../common/Wrappers/WrapperComponents";

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
  const {register, handleSubmit} = useForm();

  const handleChange = (event) => {
    updateField(event.target.name, event.target.value)
  }

  const onSubmit = ({dialog, message}) => {
    setMessageAC(dialog, message)
    resetFields()
  }

  return (
    <Wrapper title="DIALOGS">
      <div className={style.main}>
        <table>
          <tr>
            <th>Users</th>
            <th>Messages</th>
          </tr>
          {dialogData.map(({name, image}, index) =>
            <tr key={name}>
              <td><img src={image} alt={`avatar ${name}`} width="25" height="25"/><span>{name}</span></td>
              <td>{messagesData[index]}</td>
            </tr>)}
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
          <button type="submit" disabled={!fieldDialog && !fieldMessage}>Click</button>
        </form>
      </div>
    </Wrapper>
  );
}

export default Messages;

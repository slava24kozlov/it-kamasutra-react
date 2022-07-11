import React from "react";
import style from "./Messages.module.scss";
import {useForm} from "react-hook-form";
import Wrapper from "../common/Wrappers/WrapperComponents";
import {MessagesStateType} from "../../redux/reducer/MessagesReducer";

type PropsMessagesType = {
    dataMessages: MessagesStateType["data"]
    fieldDialog: string
    fieldMessage: string
    updateField: (field: string, value: string) => void
    resetFields: () => void
    setMessage: (field: string, value: string) => void
}

type useFormMessagesType = {
    dialog: string
    message: string
}

const Messages: React.FC<PropsMessagesType> = (
    {
        dataMessages,
        fieldDialog,
        fieldMessage,
        updateField,
        resetFields,
        setMessage
    }
) => {
    const {register, handleSubmit} = useForm<useFormMessagesType>();

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        updateField(event.target.name, event.target.value);
    };

    const onSubmit = ({dialog, message}: useFormMessagesType): void => {
        setMessage(dialog, message);
        resetFields();
    };

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

                <form id="messagesForm" onSubmit={handleSubmit(onSubmit)}>
                    <textarea
                        {...register("dialog", {required: "field is empty"})}
                        onChange={handleChange}
                        value={fieldDialog}
                        placeholder="Enter name"/>
                    <textarea
                        {...register("message", {required: "field is empty"})}
                        onChange={handleChange}
                        value={fieldMessage}
                        placeholder="Enter message"/>
                    <button type="submit" disabled={!fieldDialog || !fieldMessage}>Click</button>
                </form>
            </div>
        </Wrapper>
    );
};

export default Messages;

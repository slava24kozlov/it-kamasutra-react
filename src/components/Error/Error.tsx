import React from "react";
import Wrapper from "../common/Wrappers/WrapperComponents";

type PropsType = {
    code: string | null
    name: string | null
    message: string | null
}

const Error: React.FC<PropsType> = ({code, name, message}) => (
    <Wrapper title="Error">
        <div style={{fontSize: "20px", color: "red"}}>
            <label htmlFor="codeError" aria-labelledby="codeError">Code: </label>
            <span style={{fontStyle: "italic"}} id="codeError" aria-labelledby="nameError">{code}</span>
        </div>
        <div style={{fontSize: "20px", color: "red"}}>
            <label htmlFor="nameError">Name: </label>
            <span style={{fontStyle: "italic"}} id="nameError">{name}</span>
        </div>
        <div style={{fontSize: "20px", color: "red"}}>
            <label htmlFor="messageError" aria-labelledby="messageError">Message: </label>
            <span style={{fontStyle: "italic"}} id="messageError">{message}</span>
        </div>
    </Wrapper>
);

export default Error;

import React from "react";
import Wrapper from "../common/Wrappers/WrapperComponents";

type PropsType = {
    error: string
}

const Error: React.FC<PropsType> = ({error}) => (
    <Wrapper title="Error">
        <div style={{fontSize: "20px", color: "red"}}>{error}</div>
    </Wrapper>
);

export default Error;

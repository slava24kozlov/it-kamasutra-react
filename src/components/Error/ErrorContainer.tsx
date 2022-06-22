import React from "react";
import Wrapper from "../common/Wrappers/WrapperComponents";
import {getResponseError} from "../../redux/selectors/CommonSelector";
import {connect, ConnectedProps} from "react-redux";
import {AppStateType} from "../../redux/store";

type PropsType = ConnectedProps<typeof connector>

const ErrorContainer: React.FC<PropsType> = ({errorResponseMessage}) => {
    console.log(errorResponseMessage);
    return (
        <Wrapper title="Error">
            <div style={{fontSize: "20px", color: "red"}}>
                <label htmlFor="codeError" aria-labelledby="codeError">Code: </label>
                <span style={{fontStyle: "italic"}} id="codeError"
                      aria-labelledby="nameError">{errorResponseMessage.code}</span>
            </div>
            <div style={{fontSize: "20px", color: "red"}}>
                <label htmlFor="nameError">Name: </label>
                <span style={{fontStyle: "italic"}} id="nameError">{errorResponseMessage.name}</span>
            </div>
            <div style={{fontSize: "20px", color: "red"}}>
                <label htmlFor="messageError" aria-labelledby="messageError">Message: </label>
                <span style={{fontStyle: "italic"}} id="messageError">{errorResponseMessage.message}</span>
            </div>
        </Wrapper>
    );

};

const MapStateToProps = (state: AppStateType) => ({
    errorResponseMessage: getResponseError(state)
});

const connector = connect(MapStateToProps, {});
export default connector(ErrorContainer);

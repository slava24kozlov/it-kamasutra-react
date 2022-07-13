import React from "react";
import Wrapper from "../common/Wrappers/WrapperComponents";
import {getResponseError} from "../../redux/selectors/CommonSelector";
import {connect, ConnectedProps} from "react-redux";
import {AppStateType} from "../../redux/store";
import {Navigate, useNavigate} from "react-router-dom";

type PropsType = ConnectedProps<typeof connector>

const ErrorContainer: React.FC<PropsType> = ({errorResponseMessage: {isError, code, name, message}}) => {
    const navigate = useNavigate();
    if (!isError) {
        return <Navigate to="/" replace/>;
    }

    const handleReload = () => {
        navigate(0);
    };

    return (
        <Wrapper title="Error">
            <div style={{fontSize: "20px", color: "red"}}>
                <label htmlFor="codeError" aria-labelledby="codeError">Code: </label>
                <span style={{fontStyle: "italic"}} id="codeError"
                      aria-labelledby="nameError">{code}</span>
            </div>
            <div style={{fontSize: "20px", color: "red"}}>
                <label htmlFor="nameError">Name: </label>
                <span style={{fontStyle: "italic"}} id="nameError">{name}</span>
            </div>
            <div style={{fontSize: "20px", color: "red"}}>
                <label htmlFor="messageError" aria-labelledby="messageError">Message: </label>
                <span style={{fontStyle: "italic"}} id="messageError">{message}</span>
            </div>
            <button style={{padding: "10px", margin: "10px 0", fontWeight: "bold", cursor: "pointer"}}
                    onClick={handleReload}>Reload Page
            </button>
        </Wrapper>
    );
};

const MapStateToProps = (state: AppStateType) => ({
    errorResponseMessage: getResponseError(state)
});

const connector = connect(MapStateToProps, {});
export default connector(ErrorContainer);

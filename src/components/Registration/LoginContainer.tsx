import React from "react";
import style from "./Login.module.scss";
import {connect, ConnectedProps} from "react-redux";
import {loginUserTC, SetLoginDataType} from "../../redux/reducer/LoginReducer";
import {useForm} from "react-hook-form";
import FieldWrapper from "../common/Wrappers/FieldWrapper";
import {getLogin, getPassword, getRememberMe, getResponseMessage} from "../../redux/selectors/LoginSelectors";
import Wrapper from "../common/Wrappers/WrapperComponents";
import {AppStateType} from "../../redux/store";
import {getAuthId, getIsAuth} from "../../redux/selectors/AuthSelectors";
import {Navigate} from "react-router-dom";

type PropsType = ConnectedProps<typeof connector>

const Login: React.FC<PropsType> = ({login, password, rememberMe, responseMessage, loginUserTC, isAuth, idAuthUser}) => {
    const {register, handleSubmit, reset, formState: {errors, touchedFields}} = useForm<SetLoginDataType>();

    const onSubmit = (values: SetLoginDataType): void => {
        loginUserTC(values);
        reset();
    };

    if (isAuth) {
        return <Navigate to={`/profile/${idAuthUser}`} replace/>;
    }

    return (
        <Wrapper title="YOU MUST LOG IN">
            <div className={style.main}>
                <form className={style.formLogin} onSubmit={handleSubmit(onSubmit)}>
                    <FieldWrapper inputId="loginEmail" label="Login" error={errors.email} touched={touchedFields.email}>
                        <input aria-placeholder="Enter your login"
                               id="loginEmail"
                               {...register("email", {required: "field is required"})}
                               defaultValue={login}
                               placeholder="Enter your login"/>
                    </FieldWrapper>
                    <FieldWrapper inputId="loginPassword" label="Password" error={errors.password}
                                  touched={touchedFields.password}>
                        <input aria-placeholder="Enter your password"
                               id="loginPassword"
                               type="password"
                               {...register("password", {required: "field is required"})}
                               defaultValue={password}
                               placeholder="Enter your password"/>
                    </FieldWrapper>
                    <FieldWrapper inputId="loginRememberMe" label="Remember me" error={errors.rememberMe}
                                  touched={touchedFields.rememberMe}>
                        <input id="loginRememberMe" type="checkbox"
                               {...register("rememberMe")}
                               defaultChecked={rememberMe}/>
                    </FieldWrapper>
                    <button type="submit">Submit</button>
                    {responseMessage && <div className={style.responseMessage}>{responseMessage}</div>}
                </form>
            </div>
        </Wrapper>
    );
};

const mapStateToProps = (state: AppStateType) => ({
    login: getLogin(state),
    password: getPassword(state),
    rememberMe: getRememberMe(state),
    responseMessage: getResponseMessage(state),
    isAuth: getIsAuth(state),
    idAuthUser: getAuthId(state),
});

const connector = connect(mapStateToProps, {loginUserTC});
export default connector(Login);

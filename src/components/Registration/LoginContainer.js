import React from 'react'
import style from './Login.module.scss';
import {connect} from "react-redux";
import {loginUserTC} from "../../redux/reducer/login-reducer";
import {useForm} from "react-hook-form";
import FieldWrapper from "../common/Wrappers/FieldWrapper";
import {useHistory} from "react-router-dom";

const Login = ({login, password, rememberMe, responseMessage, loginUserTC}) => {
  const history = useHistory();
  const {register, handleSubmit, reset, formState: {errors, touchedFields}} = useForm()

  const onSubmit = (values) => {
    reset()
    loginUserTC(values, history)
  }

  return (
    <div className={style.main}>
      <h1>You must log in</h1>
      <form className={style.formLogin} onSubmit={handleSubmit(onSubmit)}>
        <FieldWrapper label="Login" error={errors.login} touched={touchedFields.login}>
          <input type='text'
                 {...register('email', {required: 'field is required'})}
                 defaultValue={login} placeholder="Enter your login"/>
        </FieldWrapper>
        <FieldWrapper label="Password" error={errors.password} touched={touchedFields.password}>
          <input type='password'
                 {...register('password', {required: 'field is required'})}
                 defaultValue={password} placeholder="Enter your password"/>
        </FieldWrapper>
        <FieldWrapper label="Remember me" error={errors.rememberMe} touched={touchedFields.rememberMe}>
          <input type='checkbox' {...register('rememberMe')} defaultChecked={rememberMe}/>
        </FieldWrapper>
        <button type='submit'>Submit</button>
        {responseMessage && <div className={style.responseMessage}>{responseMessage}</div>}
      </form>
    </div>
  )
}

const mapStateToProps = (state) => ({
  login: state.loginUser.login,
  password: state.loginUser.password,
  rememberMe: state.loginUser.rememberMe,
  responseMessage: state.loginUser.responseMessage,
})

export default connect(mapStateToProps, {loginUserTC})(Login)
import React from 'react'
import style from './Login.module.scss';
import {connect} from "react-redux";
import {loginUserTC} from "../../redux/reducer/LoginReducer";
import {useForm} from "react-hook-form";
import FieldWrapper from "../common/Wrappers/FieldWrapper";
import {getLogin, getPassword, getRememberMe, getResponseMessage} from "../../redux/selectors/LoginSelectors";
import Wrapper from "../common/Wrappers/WrapperComponents";

const Login = ({login, password, rememberMe, responseMessage, loginUserTC}) => {
  const {register, handleSubmit, reset, formState: {errors, touchedFields}} = useForm()

  const onSubmit = (values) => {
    reset()
    loginUserTC(values)
  }

  return (
    <Wrapper title="YOU MUST LOG IN">
      <div className={style.main}>
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
    </Wrapper>
  )
}

const mapStateToProps = (state) => ({
  login: getLogin(state),
  password: getPassword(state),
  rememberMe: getRememberMe(state),
  responseMessage: getResponseMessage(state),
})

export default connect(mapStateToProps, {loginUserTC})(Login)
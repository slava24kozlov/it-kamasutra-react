import React from 'react'
import style from './Login.module.scss';
import {connect} from "react-redux";
import {setLoginUserAC} from "../../redux/reducer/login-reducer";
import {useForm} from "react-hook-form";

const Login = (props) => {
  const { register, handleSubmit, reset, formState: {errors} } = useForm()

  const onSubmit = (values) => {
    reset()
    console.log(values)
  }

  return (
    <div className={style.main}>
      <h1>You must log in</h1>
      <form className={style.formLogin} onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        <div>
          <label>Login:</label>
          <input type='text'
                 {...register('login', {required: 'field is required'})}
                 defaultValue={props.login} placeholder="Enter your login"/>
          {errors.login && <p style={{color: 'red'}}>{errors.login.message}</p>}
        </div>
        <div>
          <label>Password:</label>
          <input type='text'
                 {...register('password', {required: 'field is required'})}
                 defaultValue={props.password} placeholder="Enter your password"/>
          {errors.password && <p style={{color: 'red'}}>{errors.password.message}</p>}
        </div>
        <div>
          <label>Remember me:</label>
          <input type='checkbox' {...register('RememberMe')}/>
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

const mapStateToProps = (state) => ({
  login: state.loginUser.login,
  password: state.loginUser.password,
  rememberMe: state.loginUser.rememberMe,
})

export default connect(mapStateToProps, {setLoginUserAC})(Login)
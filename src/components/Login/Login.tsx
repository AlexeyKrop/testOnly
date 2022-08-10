import React from 'react';
import {Controller, useForm} from "react-hook-form";
import {Navigate} from 'react-router-dom';
import {Button} from "../Button/Button";
import {StyledError, StyledInput} from "../Input/Input";

type FormData = {
  login: string;
  password: string;
};
type LoginPropsType = {
  callBack: (login: string, password: string) => void
  isLogin: boolean
  errorMessage: string
  disabled: boolean
}

export const Login = (props: LoginPropsType) => {
  const {
    register,
    setValue,
    handleSubmit,
    formState: {errors}
  } = useForm<FormData>();
  const onSubmit = handleSubmit(({login, password}) => {
    props.callBack(login, password)
  });
  if (props.isLogin) {
    return <Navigate to="/profile"/>
  }

  return (
    <>
      <div>
        {props.errorMessage ? props.errorMessage : ''}
      </div>
      <form onSubmit={onSubmit}>

        <label>Логин</label>
        <StyledInput  {...register("login", {required: true,})}/>
        <StyledError>{errors.login && "Обязательное поле"}</StyledError>
        <label>Пароль</label>
        <StyledInput type="password" {...register("password", {required: true})} />
        <StyledError>{errors.password && "Обязательное поле"}</StyledError>
        <Button primary background={'#4A67FF'} disabled={props.disabled} type='submit'>Войти</Button>
      </form>
    </>
  );
};


import React from 'react';
import {useForm} from "react-hook-form";
import { Navigate } from 'react-router-dom';
import {Button} from "../Button/Button";

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
      <input {...register("login", {required: true})} />
      {/*<div>{errors.login && "Обязательное поле"}</div>*/}
      <label>Пароль</label>
      <input type="password" {...register("password", {required: true})} />
      {/*<div>{errors.password && "Обязательное поле"}</div>*/}
      <Button disabled={props.disabled} type='submit'>Войти</Button>
    </form>
    </>
  );
};


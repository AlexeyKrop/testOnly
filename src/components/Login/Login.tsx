import React from 'react';
import {useForm} from "react-hook-form";
import styled from "styled-components";
import {loginUser} from "../../api/Auth";


type FormData = {
  login: string;
  password: string;
};

export const Login = () => {
  const {
    register,
    setValue,
    handleSubmit,
    formState: {errors}
  } = useForm<FormData>();
  const onSubmit = handleSubmit(({login, password}) => {
    loginUser(login, password);
  });
  return (
      <form onSubmit={onSubmit}>
        <label>Логин</label>
        <input {...register("login", {required: true})} />
        {/*<div>{errors.login && "Обязательное поле"}</div>*/}
        <label>Пароль</label>
        <input type="password" {...register("password", {required: true})} />
        {/*<div>{errors.password && "Обязательное поле"}</div>*/}
        <button type="submit">Войти</button>
      </form>
  );
};


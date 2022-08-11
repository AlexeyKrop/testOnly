import React from 'react';
import {useForm} from "react-hook-form";
import {Navigate} from 'react-router-dom';
import {Button} from "../../Button/Button";
import {ContainerError, CustomInput, StyledError} from "../../Input/Input";
import {CheckBoxContainer, CustomCheckBox, LabelText, StyledCheckboxWrapper} from "../../Input/CheckBox";

type FormData = {
  login: string;
  password: string;
  rememberMe?: boolean
};
type LoginPropsType = {
  callBack: (login: string, password: string, rememberMe: boolean) => void
  isLogin: boolean
  errorMessage: string
  disabled: boolean
}

export const Login = (props: LoginPropsType) => {
  const {
    register,
    handleSubmit,
    formState: {errors}
  } = useForm<FormData>();
  const onSubmit = handleSubmit(({login, password, rememberMe = false}) => {
    props.callBack(login, password, rememberMe)
  });
  if (props.isLogin) {
    return <Navigate to="/profile"/>
  }

  return (
    <>
      {props.errorMessage && <ContainerError>
        {props.errorMessage}
      </ContainerError>}
      <form onSubmit={onSubmit}>
        <LabelText>Логин</LabelText>
        <CustomInput border={errors.login && '1px solid red'} {...register("login", {required: true,})}/>
        <StyledError>{errors.login && "Обязательное поле"}</StyledError>
        <LabelText>Пароль</LabelText>
        <CustomInput border={errors.password && '1px solid red'}
                     type="password" {...register("password", {required: true})} />
        <StyledError>{errors.password && "Обязательное поле"}</StyledError>
        <CheckBoxContainer>
          <StyledCheckboxWrapper><CustomCheckBox {...register("rememberMe")}/></StyledCheckboxWrapper>
          <LabelText>Запомнить пароль</LabelText></CheckBoxContainer>
        <Button primary background={'#4A67FF'} disabled={props.disabled} type='submit'>Войти</Button>
      </form>
    </>
  );
};


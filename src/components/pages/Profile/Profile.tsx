import React from 'react';
import {UserType} from "../../../App";
import {Navigate} from "react-router-dom";
import {Button} from "../../Button/Button";
import {ProfileWrapper, UserName} from "./Title";
type ProfilePropsType = {
  user: UserType
  setLogoutUser: () => void
  isLogin: boolean
  disabled: boolean
}
export const Profile = (props: ProfilePropsType) => {
  const onClickHandler = () => {
    props.setLogoutUser()
  }
  if (!props.isLogin) {
    return <Navigate to="/login"/>
  }
  return (
    <ProfileWrapper>
      <UserName>{props.user.login}</UserName>
      <Button onClick={onClickHandler} primary background={'#F5F5F5'} color={'#000000'} disabled={props.disabled} width={'200px'} type='submit'>Выйти</Button>
    </ProfileWrapper>
  );
};

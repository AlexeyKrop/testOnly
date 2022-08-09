import React from 'react';
import {UserType} from "../../App";
import {Navigate} from "react-router-dom";
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
    <div>
      <h2>Здравствуйте, {props.user.login}</h2>
      <button disabled={props.disabled} onClick={onClickHandler}>Выйти</button>
    </div>
  );
};

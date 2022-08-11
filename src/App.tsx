import React, {useState} from 'react';
import './App.css';
import {Login} from "./components/pages/Login/Login";

import {authAPI} from "./api/Auth";
import {Navigate, Route, Routes} from 'react-router-dom';
import {Profile} from "./components/pages/Profile/Profile";
import {Error404} from "./components/pages/Error404/Error404";
import { StyledHeaderApp, StyledWrapperApp } from './components/pages/App/AppStyled';


export type UserType = {
  id: string
  login: string
}
const App = () => {
  const initialState = {} as UserType
  const [user, setUser] = useState<UserType>(initialState)
  const [isLogin, setLogin] = useState<boolean>(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [disabled, setDisabled] = useState<boolean>(false)


  const setLoginUser = (login: string, password: string, rememberMe: boolean) => {
    //меняю состояние кнопки при запросе на сервер(disabled)
    setDisabled(true)
    authAPI.login(login, password, rememberMe)
      .then((data) => {
        //сетаю юзера, которого получил с сервера в локальный стейт
        setUser(data as UserType)
        //меняю состояние, что юзер залогинен
        setLogin(!isLogin)
      })
      .catch(err => setErrorMessage(err))
      .finally(() => setDisabled(false))
  }

  const setLogoutUser = () => {
    //меняю состояние кнопки при запросе на сервер(disabled)
    setDisabled(true)
    //имитация запроса на сервер(logout)
    authAPI.logout()
      //меняю состояние, что юзер вышел
      .then(data => setLogin(!isLogin))
      .catch(err => console.log(err))
      .finally(() => {
        setDisabled(false)
        setErrorMessage('')
      })
  }
  return (
    <>
      <StyledHeaderApp>ONLY.</StyledHeaderApp>
      <StyledWrapperApp>
        <Routes>
          <Route path={'/'} element={<Navigate to={'/profile'}/>}/>
          <Route path="/profile"
                 element={<Profile user={user} disabled={disabled} setLogoutUser={setLogoutUser} isLogin={isLogin}/>}/>
          <Route path="/login"
                 element={<Login disabled={disabled} callBack={setLoginUser} isLogin={isLogin}
                                 errorMessage={errorMessage} setErrorMessage={setErrorMessage}/>}/>
          <Route path="404" element={<Error404/>}/>
          <Route path="*" element={<Navigate to={'404'}/>}/>
        </Routes>
      </StyledWrapperApp>
    </>
  )
}


export default App;

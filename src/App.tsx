import React, {useState} from 'react';
import './App.css';
import {Login} from "./components/Login/Login";
import styled from "styled-components";
import {authAPI} from "./api/Auth";
import {Navigate, Route, Routes} from 'react-router-dom';
import {Profile} from "./components/Profile/Profile";

const StyledWrapperApp = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
export type UserType = {
  id: string
  login: string
}
const App = () => {
  const initialState = {} as UserType
  const [user, setUser] = useState<any>(initialState)
  const [isLogin, setLogin] = useState<boolean>(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [disabled, setDisabled] = useState<boolean>(false)


  const setLoginUser = (login: string, password: string, rememberMe: boolean) => {
    //меняю состояние кнопки при запросе на сервер(disabled)
    setDisabled(true)
    authAPI.login(login, password, rememberMe)
      .then((data) => {
        //сетаю юзера, которого получил с сервера в локальный стейт
        setUser(data)
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
      <StyledWrapperApp>
        <Routes>
          <Route path={'/'} element={<Navigate to={'/profile'}/>}/>
          <Route path="/profile"
                 element={<Profile user={user} disabled={disabled} setLogoutUser={setLogoutUser} isLogin={isLogin}/>}/>
          <Route path="/login"
                 element={<Login disabled={disabled} callBack={setLoginUser} isLogin={isLogin}
                                 errorMessage={errorMessage}/>}/>
          <Route path="*" element={<Navigate to={'404'}/>}/>
        </Routes>

      </StyledWrapperApp>
    </>
  )
}


export default App;

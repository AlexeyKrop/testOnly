import React from 'react';
import './App.css';
import {Login} from "./components/Login/Login";
import styled from "styled-components";

const StyledWrapperApp = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`
const App = () => (
  <>
    <StyledWrapperApp>
      <Login/>
    </StyledWrapperApp>
  </>
);

export default App;

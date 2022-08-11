import React from 'react'
import {NavLink} from "react-router-dom";
import {Button} from "../../Button/Button";

export const Error404 = () => {
  return (
    <div>
      <div>404</div>
      <div>Page not found!</div>
      <div>—ฅ/ᐠ.̫ .ᐟ\ฅ—</div>
      <NavLink to={`/profile`}><Button>Go Home</Button></NavLink>
    </div>
  )
}


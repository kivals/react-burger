import React from 'react';
import {Logo} from "@ya.praktikum/react-developer-burger-ui-components";
import {NavLink} from "react-router-dom";

const AppLogo = () => {
    return (
        <NavLink to="/">
          <Logo />
        </NavLink>
    );
};

export default AppLogo;
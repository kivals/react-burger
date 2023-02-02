import React from 'react';
import {iconColorTypes, iconTypes} from "../../../utils/icon-types";
import AppMenu from "../AppMenu/AppMenu";
import HeaderLink from "../../UI/HeaderLink/HeaderLink";
import AppLogo from "../AppLogo/AppLogo";
import styles from './AppHeader.module.css';

const AppHeader = () => {
    return (
        <div className={styles.headerBody}>
            <AppMenu />
            <AppLogo />
            <HeaderLink icon={iconTypes.BURGER} type={iconColorTypes.SECONDARY} path='/profile'>Личный кабинет</HeaderLink>
        </div>
    );
};

export default AppHeader;
import React from 'react';
import {iconTypes} from "../../../utils/icon-types";
import AppMenu from "../AppMenu/AppMenu";
import HeaderLink from "../../UI/HeaderLink/HeaderLink";
import AppLogo from "../AppLogo/AppLogo";
import styles from './AppHeader.module.css';

const AppHeader = () => {
    return (
        <header className={styles.header}>
            <div className='container'>
                <div className={styles.headerBody}>
                    <AppMenu />
                    <AppLogo />
                    <HeaderLink icon={iconTypes.BURGER} type="secondary">Личный кабинет</HeaderLink>
                </div>

            </div>
        </header>
    );
};

export default AppHeader;
import React, {FC} from 'react';
import AppMenu from "../AppMenu/AppMenu";
import HeaderLink from "../../UI/HeaderLink/HeaderLink";
import AppLogo from "../AppLogo/AppLogo";
import styles from './AppHeader.module.css';

const AppHeader: FC = () => {
    return (
        <div className={styles.headerBody}>
            <AppMenu />
            <AppLogo />
            <HeaderLink icon='burger' type='secondary' path='/profile/edit'>Личный кабинет</HeaderLink>
        </div>
    );
};

export default AppHeader;
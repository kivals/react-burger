import React from 'react';
import {iconColorTypes, iconTypes} from "../../../utils/icon-types";
import HeaderLink from "../../UI/HeaderLink/HeaderLink";
import styles from './AppMenu.module.css';

const AppMenu = () => {
    return (
        <nav title="Главное меню">
            <ul title="Главное меню" className={styles.list}>
                <li className={styles.menuItem}>
                    <HeaderLink icon={iconTypes.BURGER} type={iconColorTypes.PRIMARY}>Конструктор</HeaderLink>
                </li>
                <li className={styles.menuItem}>
                    <HeaderLink icon={iconTypes.LIST} type={iconColorTypes.SECONDARY}>Лента заказов</HeaderLink>
                </li>
            </ul>
        </nav>
    );
};

export default AppMenu;
import React, {FC} from 'react';
import HeaderLink from "../../UI/HeaderLink/HeaderLink";
import styles from './AppMenu.module.css';

const AppMenu: FC = () => {
    return (
        <nav title="Главное меню">
            <ul title="Главное меню" className={styles.list}>
                <li className={styles.menuItem}>
                    <HeaderLink icon='burger' type='primary' path='/'>Конструктор</HeaderLink>
                </li>
                <li className={styles.menuItem}>
                    <HeaderLink icon='list' type='secondary' path='/feed'>Лента заказов</HeaderLink>
                </li>
            </ul>
        </nav>
    );
};

export default AppMenu;
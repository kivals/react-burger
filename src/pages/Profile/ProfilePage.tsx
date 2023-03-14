import React, {FC} from 'react';
import styles from './Profile.module.css';
import {Link} from "react-router-dom";
import {logout} from "../../services/actions/auth";
import { Outlet } from "react-router-dom";
import {useDispatch} from "../../services/hooks";

const ProfilePage: FC = () => {
  const dispatch = useDispatch();

  const exitHandler = (e: React.MouseEvent) => {
    e.preventDefault();
    dispatch(logout());
  }

  return (
    <div className={`${styles.profile} pt-30`}>
      <nav className={`${styles.menu} mr-15`}>
        <ul className={`${styles.menuList} mb-20`}>
          <li className={`${styles.menuItem} pt-3 pb-3`}>
            <Link to="edit">Профиль</Link>
          </li>
          <li className={`${styles.menuItem} pt-3 pb-3`}>
            <Link to="orders">История заказов</Link>
          </li>
          <li className={`${styles.menuItem} pt-3 pb-3`}>
            <a onClick={exitHandler} href="/">Выход</a>
          </li>
        </ul>

        <p className={styles.descr}>В этом разделе вы можете изменить свои персональные данные</p>
      </nav>
      <div className={styles.content}>
        <Outlet />
      </div>
    </div>
  );
};

export default ProfilePage;
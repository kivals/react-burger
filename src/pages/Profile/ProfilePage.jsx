import React from 'react';
import styles from './Profile.module.css';
import ProfileEdit from "../../components/Profile/ProfileEdit/ProfileEdit";

const ProfilePage = () => {
  return (
    <div className={`${styles.profile} pt-30`}>
      <nav className={`${styles.menu} mr-15`}>
        <ul className={`${styles.menuList} mb-20`}>
          <li className={`${styles.menuItem} pt-3 pb-3`}>
            <a href="/">Профиль</a>
          </li>
          <li className={`${styles.menuItem} pt-3 pb-3`}>
            <a href="/">История заказов</a>
          </li>
          <li className={`${styles.menuItem} pt-3 pb-3`}>
            <a href="/">Выход</a>
          </li>
        </ul>

        <p className={styles.descr}>В этом разделе вы можете изменить свои персональные данные</p>
      </nav>
      <div className={styles.content}>
        <ProfileEdit />
      </div>
    </div>
  );
};

export default ProfilePage;
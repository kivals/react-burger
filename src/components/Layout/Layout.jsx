import React from 'react';
import AppHeader from "../Header/AppHeader/AppHeader";
import { Outlet } from "react-router-dom";

import styles from "./Layout.module.css";

const Layout = () => {
  console.log('LAYOUT');
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <div className='container'>
          <AppHeader />
        </div>
      </header>

      <main className={`${styles.main} container`}>
        <Outlet />
      </main>

    </div>
  );
};

export default Layout;
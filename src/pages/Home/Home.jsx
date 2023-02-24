import React from 'react';
import styles from "./Home.module.css";
import AppMain from "../../components/Main/AppMain";

const Home = () => {
  return (
    <div>
      <div className={`${styles.app}`}>
        <AppMain />
      </div>
    </div>
  );
};

export default Home;
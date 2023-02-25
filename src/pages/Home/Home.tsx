import React, {FC} from 'react';
import styles from "./Home.module.css";
import AppMain from "../../components/Main/AppMain";

const Home: FC = () => {
  return (
    <div>
      <div className={`${styles.app}`}>
        <AppMain />
      </div>
    </div>
  );
};

export default Home;
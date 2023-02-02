import React from 'react';
import styles from "./AuthWrapper.module.css";
import PropTypes from "prop-types";

const AuthWrapper = ({title, children}) => {
  return (
    <div className={styles.authBody}>
      <h1 className='mb-6'>{title}</h1>
      {children}
    </div>
  );
};

AuthWrapper.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
}

export default AuthWrapper;
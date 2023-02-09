import React from 'react';
import styles from "./AuthWrapper.module.css";
import PropTypes from "prop-types";

const AuthWrapper = ({title, children, error}) => {
  return (
    <div className={styles.authBody}>
      <h1 className='mb-3'>{title}</h1>
      {error && <p className={`${styles.error} mb-3`}>{error}</p>}
      {children}
    </div>
  );
};

AuthWrapper.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  error: PropTypes.string,
}

export default AuthWrapper;
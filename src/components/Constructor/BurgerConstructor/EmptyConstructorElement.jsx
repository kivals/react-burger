import React from 'react';
import styles from './EmptyConstructorElement.module.css'
import PropTypes from "prop-types";

const EmptyConstructorElement = ({type = '', children, isHover}) => {
  const borderClass = isHover ? 'dragBorder' : '';

  return (
    <div className={`${styles.element} ${styles[type]} ${styles[borderClass]} mb-4 mr-5 ml-8`}>
      {children}
    </div>
  );
};

EmptyConstructorElement.propTypes = {
  type: PropTypes.string,
  children: PropTypes.string.isRequired,
  isHover: PropTypes.bool,
}

export default EmptyConstructorElement;
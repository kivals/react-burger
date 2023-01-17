import React from 'react';
import styles from './ModalBackDrop.module.css';
import PropTypes from "prop-types";

const ModalOverlay = ({onClose}) => {
  return (
    <div className={styles.backdrop} onClick={onClose}></div>
  );
};

ModalOverlay.protoTypes = {
  onClose: PropTypes.func.isRequired,
}

export default ModalOverlay;
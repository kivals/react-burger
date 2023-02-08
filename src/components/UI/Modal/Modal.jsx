import React from 'react';
import ReactDOM from "react-dom";
import ModalOverlay from "./ModalOverlay";
import styles from "./Modal.module.css";
import AppIcon from "../AppIcon/AppIcon";
import {iconColorTypes, iconTypes} from "../../../utils/icon-types";
import PropTypes from "prop-types";
import {ESC_KEY_CODE} from "../../../utils/consts";
import {useNavigate} from "react-router-dom";

const Modal = ({title, children, onClose}) => {
    const navigate = useNavigate();

    React.useEffect(() => {
      const closeModalHandler = (e) => {
        if (e.keyCode === ESC_KEY_CODE) {
          onClose();
        }
      }
      window.addEventListener('keydown', closeModalHandler)
      return () => window.removeEventListener('keydown', closeModalHandler);
    }, [onClose, navigate]);

    return ReactDOM.createPortal(
        <>
          <div className={styles.modal}>
            <div className={styles.header}>
              <h2 className={styles.title}>{title}</h2>
              <button className={styles.button}>
                <AppIcon icon={iconTypes.CLOSE} type={iconColorTypes.PRIMARY} onClick={onClose} />
              </button>
            </div>
            <div className={styles.content}>{children}</div>
          </div>
          <ModalOverlay onClose={onClose}/>
        </>,
      document.body
    );
};

Modal.propTypes = {
  children: PropTypes.element.isRequired,
  onClose: PropTypes.func,
  title: PropTypes.string,
}

export default Modal;
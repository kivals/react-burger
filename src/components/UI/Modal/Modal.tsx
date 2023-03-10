import React, {FC} from 'react';
import ReactDOM from "react-dom";
import ModalOverlay from "./ModalOverlay";
import styles from "./Modal.module.css";
import AppIcon from "../AppIcon/AppIcon";
import {ESC_KEY_CODE} from "../../../utils/consts";
import {useNavigate} from "react-router-dom";

interface IModalProps {
    title?: string,
    children: React.ReactNode,
    onClose: () => void
}

const Modal: FC<IModalProps> = ({
    title,
    children,
    onClose
}) => {
    const navigate = useNavigate();

    React.useEffect(() => {
      const closeModalHandler = (e: KeyboardEvent) => {
        if (e.key === ESC_KEY_CODE) {
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
                <AppIcon icon='close' type='primary' onClick={onClose} />
              </button>
            </div>
            <div className={styles.content}>{children}</div>
          </div>
          <ModalOverlay onClose={onClose}/>
        </>,
      document.body
    );
};

export default Modal;
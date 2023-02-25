import React, {FC} from 'react';
import styles from './ModalBackDrop.module.css';

interface IModalOverlayProps {
  onClose: () => void
}

const ModalOverlay: FC<IModalOverlayProps> = ({onClose}) => {
  return (
    <div className={styles.backdrop} onClick={onClose}/>
  );
};

export default ModalOverlay;
import React, {FC} from 'react';
import styles from './EmptyConstructorElement.module.css'
import {TBunTypes} from "../../../utils/types";

interface IEmptyConstructorElementProps {
  type?: TBunTypes,
  children: React.ReactNode,
  isHover: boolean
}

const EmptyConstructorElement: FC<IEmptyConstructorElementProps> = ({type = '', children, isHover}) => {
  const borderClass = isHover ? 'dragBorder' : '';

  return (
    <div className={`${styles.element} ${styles[type]} ${styles[borderClass]} mb-4 mr-5 ml-8`}>
      {children}
    </div>
  );
};

export default EmptyConstructorElement;
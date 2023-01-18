import React from 'react';
import styles from './OrderDetails.module.css';
import doneImg from "../../../images/graphics.svg";
import { BurgerConstructorContext } from "../../../services/constructorContext";

const OrderDetails = () => {
  const { constructorOrderNumber } = React.useContext(BurgerConstructorContext);
  return (
    <>
      <h2 className={`${styles.number} mb-8`}>{constructorOrderNumber}</h2>
      <p className={`${styles.label} mb-15`}>идентификатор заказа</p>
      <img src={doneImg} className={`${styles.image} mb-15`} alt="Изображение завершенного статуса" width="120" height="120" />
      <p className='mb-2'>Ваш заказ начали готовить</p>
      <p className={styles.textGray}>Дождитесь готовности на орбитальной станции</p>
    </>
  );
};

export default OrderDetails;
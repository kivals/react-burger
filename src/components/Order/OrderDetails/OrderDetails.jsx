import React from 'react';
import styles from './OrderDetails.module.css';
import doneImg from "../../../images/graphics.svg";
import PropTypes from "prop-types";

const OrderDetails = ({orderNumber}) => {
  return (
    <>
      <h2 className={`${styles.number} mb-8`}>{orderNumber}</h2>
      <p className={`${styles.label} mb-15`}>идентификатор заказа</p>
      <img src={doneImg} className={`${styles.image} mb-15`} alt="Изображение завершенного статуса" width="120" height="120" />
      <p className='mb-2'>Ваш заказ начали готовить</p>
      <p className={styles.textGray}>Дождитесь готовности на орбитальной станции</p>
    </>
  );
};

OrderDetails.propTypes = {
  orderNumber: PropTypes.number,
}

export default OrderDetails;
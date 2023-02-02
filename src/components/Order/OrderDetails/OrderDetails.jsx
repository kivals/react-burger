import React from 'react';
import styles from './OrderDetails.module.css';
import doneImg from "../../../images/graphics.svg";
import PropTypes from "prop-types";

const OrderDetails = ({number, name}) => {
  return (
    <>
      <h2 className={`${styles.number} mb-8`}>{number}</h2>
      <p className={`${styles.label} mb-15`}>{name}</p>
      <img src={doneImg} className={`${styles.image} mb-15`} alt="Изображение завершенного статуса" width="120" height="120" />
      <p className='mb-2'>Ваш заказ начали готовить</p>
      <p className={styles.textGray}>Дождитесь готовности на орбитальной станции</p>
    </>
  )
};

OrderDetails.propTypes = {
  number: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired
}

export default OrderDetails;
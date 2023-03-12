import React from 'react';
import styles from './OrderList.module.css';
import OrderCard from "../../../pages/Feed/OrderCard";

const OrderList = () => {
  return (
    <ul className={styles.list}>
      <li>
        <OrderCard />
      </li>
      <li>
        <OrderCard />
      </li>
      <li>
        <OrderCard />
      </li>
      <li>
        <OrderCard />
      </li>
      <li>
        <OrderCard />
      </li>
    </ul>
  );
};

export default OrderList;
import React from 'react';
import styles from './OrderList.module.css';
import OrderCard from "../../../pages/Feed/OrderCard";
import {useSelector} from "../../../services/hooks";

const OrderList = () => {
  const orders = useSelector(state => state.webSocket.orders);

  return (
    <ul className={styles.list}>
      {orders.map((order) =>
        <li key={order._id}>
          <OrderCard order={order}/>
        </li>
      )}
    </ul>
  );
};

export default OrderList;
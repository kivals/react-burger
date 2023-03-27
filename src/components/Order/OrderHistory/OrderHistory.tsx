import React from 'react';
import styles from './OrderHistory.module.css';
import OrderCard from "../../../pages/Feed/OrderCard";
import {useSelector} from "../../../services/hooks";
import Loader from "../../UI/AppLoader/Loader";

const OrderHistory = () => {
  const orders = useSelector(state => [...state.webSocketUser.orders].reverse());
  if (!orders) {
    return <Loader size="large" />
  } else {
    return (
      <ul className={styles.list}>
        {orders.map((order) =>
          <li key={order._id}>
            <OrderCard order={order}/>
          </li>
        )}
      </ul>
    );
  }
};

export default OrderHistory;
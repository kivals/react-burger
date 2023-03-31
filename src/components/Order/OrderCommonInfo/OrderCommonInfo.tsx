import React from 'react';
import styles from "./OrderCommonInfo.module.css";
import {useSelector} from "../../../services/hooks";

const DONE_STATUS: string = "done";
const PENDING_STATUS: string = "pending";
const LIMIT_ORDERS: number = 15;

const OrderCommonInfo = () => {

  const { orders, total, totalToday } = useSelector(state => state.webSocket)

  return (
    <div className={styles.root}>
      <div className={`${styles.row} ${styles.numbersRow}`}>
        <div className={styles.numbers}>
          <h4 className={styles.numberTitle}>Готовы:</h4>
          <ul className={styles.numbersList}>
            {orders && orders
              .slice(0, LIMIT_ORDERS)
              .map((order) =>
                order.status === DONE_STATUS ?
                  ( <li key={order._id}>{order.number}</li>) :
                  null)
            }
          </ul>
        </div>
        <div className={styles.numbers}>
          <h4 className={styles.numberTitle}>В работе:</h4>
          <ul className={styles.numbersList}>
            {orders && orders
              .slice(0, LIMIT_ORDERS)
              .map((order) =>
                order.status === PENDING_STATUS ?
                  ( <li key={order._id}>{order.number}</li>) :
                  null)
            }
          </ul>
        </div>
      </div>
      <div className={styles.row}>
        <h4 className={styles.numberTitle}>Выполнено за все время:</h4>
        <span className={styles.count}>{total}</span>
      </div>
      <div className={styles.todayRow}>
        <h4 className={styles.numberTitle}>Выполнено за сегодня::</h4>
        <span className={styles.count}>{totalToday}</span>
      </div>
    </div>
  );
};

export default OrderCommonInfo;
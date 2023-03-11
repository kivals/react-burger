import React, {FC} from 'react';
import styles from './OrderList.module.css';
import OrderCard from "./OrderCard";

const OrderList: FC = () => {
  return (
    <div className={styles.root}>
      <h1 className={styles.title}>Лента заказов</h1>
      <div className={styles.body}>
        <section className={styles.left}>
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
        </section>

        <section className={styles.right}>
          <div className={`${styles.row} ${styles.numbersRow}`}>
            <div className={styles.numbers}>
              <h4 className={styles.numberTitle}>Готовы:</h4>
              <ul className={styles.numbersList}>
                <li>034533</li>
                <li>034533</li>
                <li>034533</li>
                <li>034533</li>
                <li>034533</li>
                <li>034533</li>
              </ul>
            </div>
            <div className={styles.numbers}>
              <h4 className={styles.numberTitle}>В работе:</h4>
              <ul className={styles.numbersList}>
                <li>034533</li>
                <li>034533</li>
                <li>034533</li>
                <li>034533</li>
                <li>034533</li>
                <li>034533</li>
              </ul>
            </div>
          </div>
          <div className={styles.row}>
            <h4 className={styles.numberTitle}>Выполнено за все время:</h4>
            <span className={styles.count}>28 752</span>
          </div>
          <div className={styles.todayRow}>
            <h4 className={styles.numberTitle}>Выполнено за сегодня::</h4>
            <span className={styles.count}>138</span>
          </div>
        </section>
      </div>
    </div>
  );
};

export default OrderList;
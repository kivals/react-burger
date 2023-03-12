import React from 'react';
import styles from "./OrderCard.module.css";
import AppIcon from "../../components/UI/AppIcon/AppIcon";

const OrderCard = () => {
  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <span className={styles.number}>#034535</span>
        <span className={styles.date}>Сегодня, 13:20</span>
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>Death Star Starship Main бургер</h3>
        <div className={styles.info}>
          <div className={styles.ingredients}>
            <ul className={styles.ingredientsList}>
              <li className={styles.ingredientItem}>
                <img className={styles.img} src="https://code.s3.yandex.net/react/code/meat-02.png" alt="" />
                <span className={styles.other}>+3</span>
              </li>
              <li className={styles.ingredientItem}>
                <img className={styles.img} src="https://code.s3.yandex.net/react/code/meat-02.png" alt=""/>
              </li>
              <li className={styles.ingredientItem}>
                <img className={styles.img} src="https://code.s3.yandex.net/react/code/meat-02.png" alt=""/>
              </li>
              <li className={styles.ingredientItem}>
                <img className={styles.img} src="https://code.s3.yandex.net/react/code/meat-02.png" alt=""/>
              </li>
              <li className={styles.ingredientItem}>
                <img className={styles.img} src="https://code.s3.yandex.net/react/code/meat-02.png" alt=""/>
              </li>
              <li className={styles.ingredientItem}>
                <img className={styles.img} src="https://code.s3.yandex.net/react/code/meat-02.png" alt=""/>
              </li>
            </ul>
          </div>
          <div className={styles.priceBody}>
            <span className={styles.priceNumber}>480</span>
            <AppIcon icon='currency' type='primary' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
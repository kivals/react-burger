import React from 'react';
import styles from './OrderItem.module.css';
import AppIcon from "../../components/UI/AppIcon/AppIcon";

const OrderItem = () => {
  return (
    <div className={styles.root}>
      <p className={styles.orderNumber}>#034533</p>
      <h1 className={styles.title}>Black Hole Singularity острый бургер</h1>
      <p className={styles.ready}>Выполнен</p>

      <p className={styles.subTitle}>Состав:</p>
      <ul className={styles.list}>
        <li>
          <div className={styles.ingredient}>
            <div className={styles.ingredientIcon}>
              <img src="https://code.s3.yandex.net/react/code/meat-02.png" alt=""/>
            </div>
            <span className={styles.name}>Флюоресцентная булка R2-D3</span>
            <div className={styles.priceBody}>
              <span className={styles.priceNumber}>2 x 20</span>
              <AppIcon icon='currency' type='primary' />
            </div>
          </div>
        </li>
        <li>
          <div className={styles.ingredient}>
            <div className={styles.ingredientIcon}>
              <img src="https://code.s3.yandex.net/react/code/meat-02.png" alt=""/>
            </div>
            <span className={styles.name}>Флюоресцентная булка R2-D3</span>
            <div className={styles.priceBody}>
              <span className={styles.priceNumber}>2 x 20</span>
              <AppIcon icon='currency' type='primary' />
            </div>
          </div>
        </li>
        <li>
          <div className={styles.ingredient}>
            <div className={styles.ingredientIcon}>
              <img src="https://code.s3.yandex.net/react/code/meat-02.png" alt=""/>
            </div>
            <span className={styles.name}>Флюоресцентная булка R2-D3</span>
            <div className={styles.priceBody}>
              <span className={styles.priceNumber}>2 x 20</span>
              <AppIcon icon='currency' type='primary' />
            </div>
          </div>
        </li>
        <li>
          <div className={styles.ingredient}>
            <div className={styles.ingredientIcon}>
              <img src="https://code.s3.yandex.net/react/code/meat-02.png" alt=""/>
            </div>
            <span className={styles.name}>Флюоресцентная булка R2-D3</span>
            <div className={styles.priceBody}>
              <span className={styles.priceNumber}>2 x 20</span>
              <AppIcon icon='currency' type='primary' />
            </div>
          </div>
        </li>
        <li>
          <div className={styles.ingredient}>
            <div className={styles.ingredientIcon}>
              <img src="https://code.s3.yandex.net/react/code/meat-02.png" alt=""/>
            </div>
            <span className={styles.name}>Флюоресцентная булка R2-D3</span>
            <div className={styles.priceBody}>
              <span className={styles.priceNumber}>2 x 20</span>
              <AppIcon icon='currency' type='primary' />
            </div>
          </div>
        </li>
        <li>
          <div className={styles.ingredient}>
            <div className={styles.ingredientIcon}>
              <img src="https://code.s3.yandex.net/react/code/meat-02.png" alt=""/>
            </div>
            <span className={styles.name}>Флюоресцентная булка R2-D3</span>
            <div className={styles.priceBody}>
              <span className={styles.priceNumber}>2 x 20</span>
              <AppIcon icon='currency' type='primary' />
            </div>
          </div>
        </li>
      </ul>
      <div className={styles.footer}>
        <span className={styles.date}>Вчера, 13:50</span>
        <div className={styles.priceBody}>
          <span className={styles.priceNumber}>510</span>
          <AppIcon icon='currency' type='primary' />
        </div>
      </div>
    </div>
  );
};

export default OrderItem;
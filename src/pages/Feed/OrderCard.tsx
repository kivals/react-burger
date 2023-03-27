import React, {FC, useMemo} from 'react';
import styles from "./OrderCard.module.css";
import AppIcon from "../../components/UI/AppIcon/AppIcon";
import {TOrder} from "../../utils/types";
import {dateFormat, getDateFormat} from "../../utils/date";
import {useSelector} from "../../services/hooks";

type TOrderCardProps = {
  order: TOrder
}

const OrderCard: FC<TOrderCardProps> = ({order}) => {
  const orderDate = getDateFormat(new Date(order.createdAt));
  const { ingredients } = useSelector((state) => state.ingredients);

  const ingredientsImages = useMemo(() =>
    ingredients.filter((ingredient) => order.ingredients.includes((ingredient._id))),
    [ingredients, order.ingredients]);

  const totalPrice = useMemo(() => order.ingredients
      .map(id => {
        return ingredients.find(item => item._id === id);
      })
      .reduce((acc, ingredient) =>
        ingredient ? acc + ingredient.price : 0, 0),
    [ingredients, order.ingredients])


  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <span className={styles.number}>{order.number}</span>
        <span className={styles.date}>{`${orderDate}, ${dateFormat(order.createdAt)}`}</span>
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{order.name}</h3>
        <div className={styles.info}>
          <div className={styles.ingredients}>
            <ul className={styles.ingredientsList}>
              {ingredientsImages.slice(0, 6).map((ingredient, index) =>
                <li className={styles.ingredientItem} key={ingredient._id}>
                  { index === 5 && <span className={styles.other}>{`+${ingredientsImages.length - 6}`}</span>}
                  <img className={styles.img} src={ingredient.image_mobile} alt={ingredient.name}/>
                </li>
              )}
            </ul>
          </div>
          <div className={styles.priceBody}>
            <span className={styles.priceNumber}>{totalPrice}</span>
            <AppIcon icon='currency' type='primary' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
import React, {FC} from 'react';
import styles from './OrderItem.module.css';
import AppIcon from "../../components/UI/AppIcon/AppIcon";
import {useLocation, useParams} from "react-router-dom";
import {useSelector} from "../../services/hooks";
import {dateFormat, getDateFormat} from "../../utils/date";

const OrderItem: FC = () => {
  const { id } = useParams<{ id: string }>();
  const location = useLocation();

  const ordersAll = useSelector((store) => store.webSocket.orders);
  const ordersUser = useSelector((store) => store.webSocketUser.orders);
  const orders = location.pathname.includes('profile/orders') ? ordersUser : ordersAll;
  const ingredients = useSelector((store) => store.ingredients.ingredients);

  const order = React.useMemo(() => {
    return orders.find(order => order._id === id)
  }, [orders, id]);

  const orderIngredients = React.useMemo(
    () => order?.ingredients.map(id => {
        return ingredients.find(ing => ing._id === id);
      }), [order?.ingredients, ingredients]);

  const orderIngredientsNoRepeat = React.useMemo(
    () => ingredients.filter((ingredient) => order?.ingredients.includes(ingredient._id)),
    [order?.ingredients, ingredients])

  const totalPrice = React.useMemo(() =>
    orderIngredients?.reduce(
      (acc, ingredient) => ingredient ? acc + ingredient.price : 0, 0),
    [orderIngredients]);

  if (!order) {
    return null;
  }
  const dayDate = getDateFormat(new Date(order.createdAt));

  return (
    <div className={styles.root}>
      <p className={styles.orderNumber}>#{order.number}</p>
      <h1 className={styles.title}>{order.name}</h1>
      <p className={styles.ready}>{order.status === 'done' ? 'Выполнен' : 'Готовится'}</p>

      <p className={styles.subTitle}>Состав:</p>
      <ul className={styles.list}>
        {orderIngredientsNoRepeat?.map(item =>
          <li key={item?._id}>
            <div className={styles.ingredient}>
              <div className={styles.ingredientIcon}>
                <img src={item?.image_mobile} alt={item?.name}/>
              </div>
              <span className={styles.name}>{item?.name}</span>
              <div className={styles.priceBody}>
                <span className={styles.priceNumber}>
                  {orderIngredients?.filter(ing => ing?._id === item?._id).length} x {item?.price}
                </span>
                <AppIcon icon='currency' type='primary' />
              </div>
            </div>
          </li>
        )}
      </ul>
      <div className={styles.footer}>
        <span className={styles.date}>{`${dayDate}, ${dateFormat(order.createdAt)}`}</span>
        <div className={styles.priceBody}>
          <span className={styles.priceNumber}>{totalPrice}</span>
          <AppIcon icon='currency' type='primary' />
        </div>
      </div>
    </div>
  );
};

export default OrderItem;
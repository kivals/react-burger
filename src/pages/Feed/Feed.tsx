import React, {FC, useEffect} from 'react';
import styles from './Feed.module.css';
import OrderList from "../../components/Order/OrderList/OrderList";
import {useDispatch} from "../../services/hooks";
import {wsConnectionClosed, wsConnectionStart} from "../../services/actions/websockets";
import OrderCommonInfo from "../../components/Order/OrderCommonInfo/OrderCommonInfo";

const Feed: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(wsConnectionStart());
    return () => {
      dispatch(wsConnectionClosed());
    };
  }, [dispatch]);

  return (
    <div className={styles.root}>
      <h1 className={styles.title}>Лента заказов</h1>
      <div className={styles.body}>
        <section className={styles.left}>
          <OrderList />
        </section>

        <section className={styles.right}>
          <OrderCommonInfo />
        </section>
      </div>
    </div>
  );
};

export default Feed;
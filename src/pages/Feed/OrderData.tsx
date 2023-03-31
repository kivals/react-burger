import React, {useEffect} from 'react';
import {useDispatch} from "../../services/hooks";
import {wsConnectionClosed, wsConnectionStart} from "../../services/actions/websockets";
import OrderItem from "../OrderDetails/OrderItem";

const OrderData = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(wsConnectionStart());
    return () => {
      dispatch(wsConnectionClosed());
    };
  }, [dispatch]);

  return (
    <div>
      <OrderItem />
    </div>
  );
};

export default OrderData;
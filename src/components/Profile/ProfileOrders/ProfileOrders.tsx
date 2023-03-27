import React, {FC, useEffect} from 'react';
import {
  wsConnectionClosedUser,
  wsConnectionStartUser
} from "../../../services/actions/websockets";
import {useDispatch} from "../../../services/hooks";
import OrderHistory from "../../Order/OrderHistory/OrderHistory";

const ProfileOrders: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(wsConnectionStartUser());
    return () => {
      dispatch(wsConnectionClosedUser());
    };
  }, [dispatch]);

  return (
    <OrderHistory />
  );
};

export default ProfileOrders;
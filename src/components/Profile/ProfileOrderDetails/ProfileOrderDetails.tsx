import React, {FC, useEffect} from 'react';
import {useDispatch} from "../../../services/hooks";
import {
  wsConnectionClosedUser,
  wsConnectionStartUser
} from "../../../services/actions/websockets";
import OrderItem from "../../../pages/OrderDetails/OrderItem";

const ProfileOrderDetails: FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const token = localStorage.getItem('token')?.split(' ')[1];
    dispatch(wsConnectionStartUser(token));
    return () => {
      dispatch(wsConnectionClosedUser());
    };
  }, [dispatch]);

  return (
    <div>
      <OrderItem />
    </div>
  );
};

export default ProfileOrderDetails;
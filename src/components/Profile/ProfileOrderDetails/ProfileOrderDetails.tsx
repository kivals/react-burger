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
    dispatch(wsConnectionStartUser());
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
import React, { useMemo } from 'react';
import {Button} from "@ya.praktikum/react-developer-burger-ui-components";
import AppIcon from "../../UI/AppIcon/AppIcon";
import styles from "./ContructorOrder.module.css";
import Modal from "../../UI/Modal/Modal";
import OrderDetails from "../../Order/OrderDetails/OrderDetails";
import {useDispatch, useSelector} from "react-redux";
import {CLEAR_ORDER, getOrderData} from "../../../services/actions/order";
import Loader from "../../UI/AppLoader/Loader";
import {calcTotalPrice} from "../../../utils/utils";
import {useNavigate} from "react-router-dom";
import {IState} from "../../../utils/types";

const ConstructorOrder = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { ingredients, bun } = useSelector((state: IState) => state.burgerConstructor);
    const { isAuth } = useSelector((state: IState) => state.auth);
    const { orderInfo } = useSelector((state: IState) => state.order);

    const totalPrice = useMemo(() => calcTotalPrice(bun, ingredients), [ingredients, bun]);

    const makeOrder = () => {
      if (!isAuth) {
        return navigate('/login');
      } else {
        if (ingredients.length === 0 || !bun._id) return;
        const body = {
          ingredients: [...ingredients.map(ing => ing._id), bun._id],
        }
        // @ts-ignore
          dispatch(getOrderData(body));
      }
    };

    const modal = (
      <Modal onClose={() => dispatch({type: CLEAR_ORDER})}>
        {orderInfo ?
          <OrderDetails number={orderInfo.number} name={orderInfo.name} /> :
          <Loader size="large" /> }
      </Modal>
    );

    return (
        <div className={`${styles.order} pr-4`}>
            <span className={`${styles.orderNumber} mr-2`}>{ totalPrice }</span>
            <AppIcon icon='currency' type='primary' />
            <Button
              htmlType="button"
              type='primary'
              size="large"
              extraClass={`${styles.button} ml-10` }
              onClick={makeOrder}
            >
                Офомить заказ
            </Button>
          {orderInfo && modal}
        </div>
    );
};

export default ConstructorOrder;
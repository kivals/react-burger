import React, { useMemo } from 'react';
import {iconColorTypes, iconTypes} from "../../../utils/icon-types";
import {Button} from "@ya.praktikum/react-developer-burger-ui-components";
import AppIcon from "../../UI/AppIcon/AppIcon";
import styles from "./ContructorOrder.module.css";
import Modal from "../../UI/Modal/Modal";
import OrderDetails from "../../Order/OrderDetails/OrderDetails";
import {useDispatch, useSelector} from "react-redux";
import {CLEAR_ORDER, getOrderData} from "../../../services/actions/order";
import Loader from "../../UI/AppLoader/Loader";
import {calcTotalPrice} from "../../../utils/utils";

const ConstructorOrder = () => {
    const dispatch = useDispatch();
    const { ingredients, bun = {} } = useSelector(state => state.burgerConstructor);
    const { orderInfo } = useSelector(state => state.order);

    const totalPrice = useMemo(() => calcTotalPrice(bun, ingredients), [ingredients, bun]);

    const makeOrder = () => {
      if (ingredients.length === 0 || !bun._id) return;
      const body = {
        ingredients: [...ingredients.map(ing => ing._id), bun._id],
      }
      dispatch(getOrderData(body));
    };

    const onClose = () => {
      dispatch({
        type: CLEAR_ORDER,
      })
    }

    const modal = (
      <Modal onClose={onClose}>
        {orderInfo ?
          <OrderDetails number={orderInfo.number} name={orderInfo.name} /> :
          <Loader size="large" /> }
      </Modal>
    );

    return (
        <div className={`${styles.order} pr-4`}>
            <span className={`${styles.orderNumber} mr-2`}>{ totalPrice }</span>
            <AppIcon icon={iconTypes.CURRENCY} type={iconColorTypes.PRIMARY} />
            <Button
              htmlType="button"
              type={iconColorTypes.PRIMARY}
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
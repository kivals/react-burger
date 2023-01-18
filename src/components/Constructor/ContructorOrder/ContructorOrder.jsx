import React from 'react';
import {iconColorTypes, iconTypes} from "../../../utils/icon-types";
import {Button} from "@ya.praktikum/react-developer-burger-ui-components";
import AppIcon from "../../UI/AppIcon/AppIcon";
import styles from "./ContructorOrder.module.css";
import PropTypes from "prop-types";
import Modal from "../../UI/Modal/Modal";
import OrderDetails from "../../Order/OrderDetails/OrderDetails";
import { BurgerConstructorContext } from "../../../services/constructorContext";
import {postData} from "../../../utils/utils";
import {POST_ORDER_URL} from "../../../utils/consts";

const ConstructorOrder = ({price}) => {
    const [orderNumber, setOrderNumber] = React.useState(null);
    const { ingredients } = React.useContext(BurgerConstructorContext);

    const makeOrder = async () => {
      if (!ingredients.length) return;

      try {
        const body = {
          ingredients: ingredients.map(ing => ing._id),
        }
        const result = await postData(POST_ORDER_URL, body);
        setOrderNumber(result.order.number);
      } catch (error) {
        console.error(error);
      }
    };

    const onClose = () => {
      setOrderNumber(null);
    }

    const modal = (
      <Modal onClose={onClose}>
        <OrderDetails orderNumber={orderNumber} />
      </Modal>
    );

    return (
        <div className={`${styles.order} pr-4`}>
            <span className={`${styles.orderNumber} mr-2`}>{ price }</span>
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
          {orderNumber && modal}
        </div>
    );
};

ConstructorOrder.propTypes = {
  price: PropTypes.number.isRequired,
}

export default ConstructorOrder;
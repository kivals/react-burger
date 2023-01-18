import React from 'react';
import {iconColorTypes, iconTypes} from "../../../utils/icon-types";
import {Button} from "@ya.praktikum/react-developer-burger-ui-components";
import AppIcon from "../../UI/AppIcon/AppIcon";
import styles from "./ContructorOrder.module.css";
import PropTypes from "prop-types";
import Modal from "../../UI/Modal/Modal";
import OrderDetails from "../../Order/OrderDetails/OrderDetails";
import { BurgerConstructorContext } from "../../../services/constructorContext";

const ConstructorOrder = ({number}) => {
    const [isModal, setIsModal] = React.useState(false);
    const { setIsMakeOrder } = React.useContext(BurgerConstructorContext);

    const makeOrder = () => {
      setIsMakeOrder(true);
      setIsModal(true);
    }

    const onClose = () => {
      setIsModal(false);
    }

    const modal = (
      <Modal onClose={onClose}>
        <OrderDetails />
      </Modal>
    );

    return (
        <div className={`${styles.order} pr-4`}>
            <span className={`${styles.orderNumber} mr-2`}>{ number }</span>
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
          {isModal && modal}
        </div>
    );
};

ConstructorOrder.propTypes = {
  number: PropTypes.number.isRequired,
}

export default ConstructorOrder;
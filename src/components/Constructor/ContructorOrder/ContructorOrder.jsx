import React from 'react';
import {iconColorTypes, iconTypes} from "../../../utils/icon-types";
import {Button} from "@ya.praktikum/react-developer-burger-ui-components";
import AppIcon from "../../UI/AppIcon/AppIcon";
import styles from "./ContructorOrder.module.css";
import PropTypes from "prop-types";

const ConstructorOrder = ({number}) => {
    return (
        <div className={`${styles.order} pr-4`}>
            <span className={`${styles.orderNumber} mr-2`}>{ number }</span>
            <AppIcon icon={iconTypes.CURRENCY} type={iconColorTypes.PRIMARY} />
            <Button htmlType="button" type={iconColorTypes.PRIMARY} size="large" extraClass={`${styles.button} ml-10`}>
                Офомить заказ
            </Button>
        </div>
    );
};

ConstructorOrder.propTypes = {
  number: PropTypes.number.isRequired,
}

export default ConstructorOrder;
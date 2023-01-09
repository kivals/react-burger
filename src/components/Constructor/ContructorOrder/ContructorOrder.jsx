import React from 'react';
import {iconTypes} from "../../../utils/icon-types";
import {Button} from "@ya.praktikum/react-developer-burger-ui-components";
import AppIcon from "../../UI/AppIcon/AppIcon";
import styles from "./ContructorOrder.module.css";

const ConstructorOrder = ({number}) => {
    return (
        <div className={`${styles.order} pr-4`}>
            <span className={`${styles.orderNumber} mr-2`}>{ number }</span>
            <AppIcon icon={iconTypes.CURRENCY} type='primary' />
            <Button htmlType="button" type="primary" size="large" extraClass={`${styles.button} ml-10`}>
                Офомить заказ
            </Button>
        </div>
    );
};

export default ConstructorOrder;
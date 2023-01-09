import React from 'react';
import {
    CurrencyIcon,
    BurgerIcon,
    ListIcon,
    ProfileIcon,
    DragIcon
} from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from "prop-types";
import {iconTypes} from "../../../utils/icon-types";

const iconComponents = {
    'currency': CurrencyIcon,
    'burger': BurgerIcon,
    'list': ListIcon,
    'profile': ProfileIcon,
    'drag': DragIcon,
}

const AppIcon = ({icon, type}) => {
    const IconComp = iconComponents[icon];
    return (
        <>
            <IconComp type={type}/>
        </>
    );
};

AppIcon.propTypes = {
    icon: PropTypes.oneOf(Object.values(iconTypes)).isRequired
}

export default AppIcon;
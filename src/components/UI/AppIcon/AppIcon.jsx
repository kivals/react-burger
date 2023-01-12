import React from 'react';
import {
    CurrencyIcon,
    BurgerIcon,
    ListIcon,
    ProfileIcon,
    DragIcon,
    CloseIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from "prop-types";
import {iconColorTypes, iconTypes} from "../../../utils/icon-types";

const iconComponents = {
    'currency': CurrencyIcon,
    'burger': BurgerIcon,
    'list': ListIcon,
    'profile': ProfileIcon,
    'drag': DragIcon,
    'close': CloseIcon,
}

const AppIcon = ({icon, type, onClick}) => {
    const IconComp = iconComponents[icon];
    return (
        <>
            <IconComp type={type} onClick={onClick}/>
        </>
    );
};

AppIcon.propTypes = {
    icon: PropTypes.oneOf(Object.values(iconTypes)).isRequired,
    type: PropTypes.oneOf(Object.values(iconColorTypes)),
    onClick: PropTypes.func,
}

export default AppIcon;
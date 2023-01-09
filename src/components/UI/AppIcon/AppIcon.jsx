import React from 'react';
import {
    CurrencyIcon,
    BurgerIcon,
    ListIcon,
    ProfileIcon,
    DragIcon
} from '@ya.praktikum/react-developer-burger-ui-components';

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

export default AppIcon;
import React, {FC} from 'react';
import {
    CurrencyIcon,
    BurgerIcon,
    ListIcon,
    ProfileIcon,
    DragIcon,
    CloseIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import {TIconProps} from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons/utils";
import {TIconNames, TIconTypes} from "../../../utils/types";

type IconComponent = ({ type }: TIconProps) => JSX.Element;

type IconComponentsLib = { [fw in TIconNames]: IconComponent };

const iconComponents: IconComponentsLib = {
    currency: CurrencyIcon,
    burger: BurgerIcon,
    list: ListIcon,
    profile: ProfileIcon,
    drag: DragIcon,
    close: CloseIcon,
}

interface IAppIconProps {
    icon: TIconNames,
    type: TIconTypes,
    onClick?: () => void
}

const AppIcon: FC<IAppIconProps> = ({icon, type, onClick}) => {
    const IconComp = iconComponents[icon];
    return (
        <>
            <IconComp type={type} onClick={onClick}/>
        </>
    );
};

export default AppIcon;
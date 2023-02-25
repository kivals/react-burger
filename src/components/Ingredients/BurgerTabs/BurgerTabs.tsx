import React, {FC} from 'react';
import {Tab} from "@ya.praktikum/react-developer-burger-ui-components";
import burgerTabsStyle from './BurgerTabs.module.css';
import {BUN_INGREDIENT, MAIN_INGREDIENT, SAUCE_INGREDIENT} from "../../../utils/consts";
import {TIngredientTypes} from "../../../utils/types";

interface IBurgerTabsProps {
    current: string,
    onClick: (tabName: TIngredientTypes) => void
}

const BurgerTabs: FC<IBurgerTabsProps> = ({current, onClick}) => {
    return (
        <div className={burgerTabsStyle.tabs}>
            <Tab value={BUN_INGREDIENT} active={current === BUN_INGREDIENT} onClick={() => {onClick(BUN_INGREDIENT)}}>
                Булки
            </Tab>
            <Tab value={SAUCE_INGREDIENT} active={current === SAUCE_INGREDIENT} onClick={() => {onClick(SAUCE_INGREDIENT)}}>
                Соусы
            </Tab>
            <Tab value={MAIN_INGREDIENT} active={current === MAIN_INGREDIENT} onClick={() => {onClick(MAIN_INGREDIENT)}}>
                Начинки
            </Tab>
        </div>
    )
};

export default BurgerTabs;
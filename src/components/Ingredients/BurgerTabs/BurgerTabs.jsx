import React from 'react';
import {Tab} from "@ya.praktikum/react-developer-burger-ui-components";
import burgerTabsStyle from './BurgerTabs.module.css';
import {BUN_INGREDIENT, MAIN_INGREDIENT, SAUCE_INGREDIENT} from "../../../utils/consts";
import PropTypes from "prop-types";

const BurgerTabs = ({current}) => {
    return (
        <div className={burgerTabsStyle.tabs}>
            <Tab value={BUN_INGREDIENT} active={current === BUN_INGREDIENT}>
                Булки
            </Tab>
            <Tab value={SAUCE_INGREDIENT} active={current === SAUCE_INGREDIENT}>
                Соусы
            </Tab>
            <Tab value={MAIN_INGREDIENT} active={current === MAIN_INGREDIENT}>
                Начинки
            </Tab>
        </div>
    )
};

BurgerTabs.propTypes = {
  current: PropTypes.string.isRequired,
}

export default BurgerTabs;
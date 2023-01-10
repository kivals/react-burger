import React from 'react';
import BurgerTabs from "../BurgerTabs/BurgerTabs";
import BurgerCardIngredient from "../BurgerCardIngredient/BurgerCardIngredient";
import burgerIngredientsStyles from './BurgerIngredients.module.css';
import PropTypes from "prop-types";
import {ingredientPropTypes} from "../../../utils/props";

const BUN_INGREDIENT = 'bun';
const SAUCE_INGREDIENT = 'sauce';
const MAIN_INGREDIENT = 'main';

const BurgerIngredients = ({data}) => {
    const getIngredientsByType = (type) => {
        return data.filter( ing => ing.type === type);
    }

    const buns = getIngredientsByType(BUN_INGREDIENT);
    const sauces = getIngredientsByType(SAUCE_INGREDIENT);
    const filling = getIngredientsByType(MAIN_INGREDIENT);

    return (
        <>
            <h1 className={burgerIngredientsStyles.title}>Собери бургер</h1>
            <BurgerTabs />
            <div className={burgerIngredientsStyles.scrollBody}>
                <h2 className='mb-6'>Булки</h2>
                <section className={burgerIngredientsStyles.card}>
                    {buns.map((bun) => (
                        <BurgerCardIngredient key={bun._id} data={bun} count={1}/>
                    ))}
                </section>
                <h2 className='mb-6'>Соусы</h2>
                <section className={burgerIngredientsStyles.card}>
                    {sauces.map((sauce) => (
                        <BurgerCardIngredient key={sauce._id} data={sauce}/>
                    ))}
                </section>
                <h2 className='mb-6'>Начинка</h2>
                <section className={burgerIngredientsStyles.card}>
                    {filling.map((fillingItem) => (
                        <BurgerCardIngredient key={fillingItem._id} data={fillingItem}/>
                    ))}
                </section>
            </div>
        </>
    );
};



BurgerIngredients.propTypes = {
    data: PropTypes.arrayOf(ingredientPropTypes.isRequired).isRequired,
}

export default BurgerIngredients;
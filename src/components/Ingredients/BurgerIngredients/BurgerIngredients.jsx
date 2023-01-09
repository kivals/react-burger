import React from 'react';
import BurgerTabs from "../BurgerTabs/BurgerTabs";
import BurgerCardIngredient from "../BurgerCardIngredient/BurgerCardIngredient";
import burgerIngredientsStyles from './BurgerIngredients.module.css';

const BurgerIngredients = ({data}) => {
    const getIngredientsByType = (type) => {
        return data.filter( ing => ing.type === type);
    }

    const buns = getIngredientsByType('bun');
    const sauces = getIngredientsByType('sauce');
    const filling = getIngredientsByType('main');

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



export default BurgerIngredients;
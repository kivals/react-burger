import React from 'react';
import BurgerIngredients from "../Ingredients/BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "../Constructor/BurgerConstructor/BurgerConstructor";
import mainStyles from './Main.module.css';
import { data } from '../../utils/data.js';

const AppMain = () => {
    return (
        <main className={`${mainStyles.main} container`}>
            <section className='pt-10'>
                <BurgerIngredients data={data} />
            </section>
            <section className='pt-25'>
                <BurgerConstructor data={data}/>
            </section>
        </main>
    );
};

export default AppMain;
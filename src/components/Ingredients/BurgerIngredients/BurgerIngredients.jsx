import React, {useEffect, useState} from 'react';
import BurgerTabs from "../BurgerTabs/BurgerTabs";
import BurgerCardIngredient from "../BurgerCardIngredient/BurgerCardIngredient";
import burgerIngredientsStyles from './BurgerIngredients.module.css';
import PropTypes from "prop-types";
import {ingredientPropTypes} from "../../../utils/props";
import {BUN_INGREDIENT, MAIN_INGREDIENT, SAUCE_INGREDIENT} from "../../../utils/consts";
import {useInView} from "react-intersection-observer";
import {useNavigate} from "react-router-dom";

const observerOptions = {
    threshold: 0.1,
    root: document.getElementById('scroll'),
}

const BurgerIngredients = ({data}) => {
    const navigate = useNavigate();

    const [currentTab, setCurrentTab] = useState(BUN_INGREDIENT);

    const { ref: bunRef, inView: bunRefVisible } = useInView(observerOptions);
    const { ref: sauceRef, inView: sauceRefVisible } = useInView(observerOptions);
    const { ref: mainRef, inView: mainRefVisible } = useInView(observerOptions);

    useEffect(() => {
        if (bunRefVisible) {
            setCurrentTab(BUN_INGREDIENT)
        } else if (sauceRefVisible) {
            setCurrentTab(SAUCE_INGREDIENT)
        } else {
            setCurrentTab(MAIN_INGREDIENT)
        }
    }, [bunRefVisible, sauceRefVisible, mainRefVisible])


    const buns = React.useMemo(() => data.filter( ing => ing.type === BUN_INGREDIENT), [data]);
    const sauces = React.useMemo(() => data.filter( ing => ing.type === SAUCE_INGREDIENT), [data]);
    const filling = React.useMemo(() => data.filter( ing => ing.type === MAIN_INGREDIENT), [data]);

    return (
        <>
            <BurgerTabs current={currentTab} />
            <div id="scroll" className={burgerIngredientsStyles.scrollBody}>
                <section ref={bunRef}>
                    <h2 className='mb-6'>Булки</h2>
                    <div className={burgerIngredientsStyles.card}>
                        {buns.map((bun) => (
                          <BurgerCardIngredient
                            key={bun._id}
                            onClick={() => navigate(`ingredients/${bun._id}`)}
                            data={bun}
                          />
                        ))}
                    </div>
                </section>
                <section ref={sauceRef}>
                    <h2 className='mb-6'>Соусы</h2>
                    <div className={burgerIngredientsStyles.card}>
                        {sauces.map((sauce) => (
                            <BurgerCardIngredient
                              key={sauce._id}
                              onClick={() => navigate(`ingredients/${sauce._id}`)}
                              data={sauce}
                            />
                        ))}
                    </div>
                </section>
                <section ref={mainRef}>
                    <h2 className='mb-6'>Начинка</h2>
                    <div className={burgerIngredientsStyles.card}>
                        {filling.map((fillingItem) => (
                            <BurgerCardIngredient
                              key={fillingItem._id}
                              onClick={() => navigate(`ingredients/${fillingItem._id}`)}
                              data={fillingItem}
                            />
                        ))}
                    </div>
                </section>
            </div>
        </>
    );
};

BurgerIngredients.propTypes = {
    data: PropTypes.arrayOf(ingredientPropTypes.isRequired).isRequired,
}

export default BurgerIngredients;
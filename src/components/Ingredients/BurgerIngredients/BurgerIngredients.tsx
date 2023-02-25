import React, {FC, useEffect, useState} from 'react';
import BurgerTabs from "../BurgerTabs/BurgerTabs";
import BurgerCardIngredient from "../BurgerCardIngredient/BurgerCardIngredient";
import burgerIngredientsStyles from './BurgerIngredients.module.css';
import {BUN_INGREDIENT, MAIN_INGREDIENT, SAUCE_INGREDIENT} from "../../../utils/consts";
import {useInView} from "react-intersection-observer";
import {useNavigate} from "react-router-dom";
import {IIngredient, TIngredientTypes} from "../../../utils/types";

const observerOptions = {
    threshold: 0.1,
    root: document.getElementById('scroll'),
}

interface IBurgerIngredientsProps {
    data: IIngredient[]
}

const BurgerIngredients: FC<IBurgerIngredientsProps> = ({data}) => {
    const navigate = useNavigate();

    const [currentTab, setCurrentTab] = useState<TIngredientTypes>(BUN_INGREDIENT);

    const { ref: bunRef, inView: bunRefVisible, entry: bunEntry } = useInView(observerOptions);
    const { ref: sauceRef, inView: sauceRefVisible, entry: sauceEntry } = useInView(observerOptions);
    const { ref: mainRef, inView: mainRefVisible, entry: mainEntry } = useInView(observerOptions);

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

    const tabHandler = (tabName: TIngredientTypes) => {
        if (tabName === BUN_INGREDIENT) {
            bunEntry?.target.scrollIntoView();
        }
        if (tabName === SAUCE_INGREDIENT) {
            sauceEntry?.target.scrollIntoView();
        }
        if (tabName === MAIN_INGREDIENT) {
            mainEntry?.target.scrollIntoView();
        }
    }

    return (
        <>
            <BurgerTabs current={currentTab} onClick={tabHandler}/>
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

export default BurgerIngredients;
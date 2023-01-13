import React from 'react';
import BurgerTabs from "../BurgerTabs/BurgerTabs";
import BurgerCardIngredient from "../BurgerCardIngredient/BurgerCardIngredient";
import burgerIngredientsStyles from './BurgerIngredients.module.css';
import PropTypes from "prop-types";
import {ingredientPropTypes} from "../../../utils/props";
import Modal from "../../UI/Modal/Modal";
import IngredientDetails from "../IngredientDetails/IngredientDetails";
import {BUN_INGREDIENT, MAIN_INGREDIENT, SAUCE_INGREDIENT} from "../../../utils/consts";

const BurgerIngredients = ({data}) => {
    const [modalIngredient, setModalIngredient] = React.useState(null);

    const buns = React.useMemo(() => data.filter( ing => ing.type === BUN_INGREDIENT), [data]);
    const sauces = React.useMemo(() => data.filter( ing => ing.type === SAUCE_INGREDIENT), [data]);
    const filling = React.useMemo(() => data.filter( ing => ing.type === MAIN_INGREDIENT), [data]);

    const showModal = (ingredient) => () => {
        setModalIngredient(ingredient);
    }

    const onClose = () => {
        setModalIngredient(null);
    }

    const modal = (
        <Modal title="Детали ингредиента" onClose={onClose}>
            <IngredientDetails details={modalIngredient} />
        </Modal>
    );

    return (
        <>
            <h1 className={burgerIngredientsStyles.title}>Собери бургер</h1>
            <BurgerTabs />
            <div className={burgerIngredientsStyles.scrollBody}>
                <h2 className='mb-6'>Булки</h2>
                <section className={burgerIngredientsStyles.card}>
                    {buns.map((bun) => (
                        <BurgerCardIngredient onClick={showModal(bun)} key={bun._id} data={bun} count={1}/>
                    ))}
                </section>
                <h2 className='mb-6'>Соусы</h2>
                <section className={burgerIngredientsStyles.card}>
                    {sauces.map((sauce) => (
                        <BurgerCardIngredient onClick={showModal(sauce)} key={sauce._id} data={sauce}/>
                    ))}
                </section>
                <h2 className='mb-6'>Начинка</h2>
                <section className={burgerIngredientsStyles.card}>
                    {filling.map((fillingItem) => (
                        <BurgerCardIngredient onClick={showModal(fillingItem)} key={fillingItem._id} data={fillingItem}/>
                    ))}
                </section>
            </div>

            {modalIngredient && modal}
        </>
    );
};



BurgerIngredients.propTypes = {
    data: PropTypes.arrayOf(ingredientPropTypes.isRequired).isRequired,
}

export default BurgerIngredients;
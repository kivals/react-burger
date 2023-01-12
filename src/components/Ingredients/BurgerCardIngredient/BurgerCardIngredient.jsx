import React from 'react';
import {Counter} from "@ya.praktikum/react-developer-burger-ui-components";
import AppIcon from "../../UI/AppIcon/AppIcon";
import styles from './BurgerCardIngredient.module.css';
import PropTypes from "prop-types";
import {ingredientPropTypes} from "../../../utils/props";
import {iconColorTypes} from "../../../utils/icon-types";

const BurgerCardIngredient = ({data, count, onClick}) => {
    return (
        <article className={styles.card} onClick={onClick}>
            <img src={data.image} width="240" height="120" className={styles.image} alt={data.name}/>
            <div className={styles.priceBody}>
                <span className={styles.priceNumber}>{data.price}</span>
                <AppIcon icon='currency' type={iconColorTypes.PRIMARY} />
            </div>
            <p className={styles.name}>{data.name}</p>
            {count && <Counter count={1} extraClass={styles.counter} />}
        </article>
    );
};

BurgerCardIngredient.propTypes = {
  data: ingredientPropTypes.isRequired,
  count: PropTypes.number,
  onClick: PropTypes.func,
}

export default BurgerCardIngredient;
import React from 'react';
import {Counter} from "@ya.praktikum/react-developer-burger-ui-components";
import AppIcon from "../../UI/AppIcon/AppIcon";
import styles from './BurgerCardIngredient.module.css';

const BurgerCardIngredient = ({data, count}) => {
    return (
        <article className={styles.card}>
            <img src={data.image} width="240" height="120" className={styles.image} alt={data.name}/>
            <div className={styles.priceBody}>
                <span className={styles.priceNumber}>{data.price}</span>
                <AppIcon icon='currency' type='primary' />
            </div>
            <p className={styles.name}>{data.name}</p>
            {count && <Counter count={1} extraClass={styles.counter} />}
        </article>
    );
};

export default BurgerCardIngredient;
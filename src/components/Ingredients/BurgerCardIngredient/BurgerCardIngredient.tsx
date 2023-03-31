import React, {FC, useMemo} from 'react';
import {Counter} from "@ya.praktikum/react-developer-burger-ui-components";
import AppIcon from "../../UI/AppIcon/AppIcon";
import styles from './BurgerCardIngredient.module.css';
import {BUN_INGREDIENT} from "../../../utils/consts";
import {useDrag} from "react-dnd";
import {Link, useLocation} from "react-router-dom";
import {useSelector} from "../../../services/hooks";
import {TRawIngredient} from "../../../utils/types";

interface IBurgerCardIngredientProps {
    data: TRawIngredient,
    onClick: () => void
}

const BurgerCardIngredient: FC<IBurgerCardIngredientProps> = ({data, onClick}) => {
    const location = useLocation();
    const { ingredients, bun } = useSelector((state) => state.burgerConstructor);
    const [, dragRef] = useDrag({
      type: "ingredient",
      item: data,
    });

    const count = useMemo(() => {
      if (data.type === BUN_INGREDIENT && data._id === bun?._id) return 2;
      return ingredients.filter((ing: { _id: string; }) => ing._id === data._id)?.length;
    }, [data, ingredients, bun]);

    return (
      <Link
        ref={dragRef}
        key={data._id}
        to={`ingredients/${data._id}`}
        state={{ background: location }}
      >
        <article className={styles.card} onClick={onClick}  >
            <img src={data.image} width="240" height="120" className={styles.image} alt={data.name}/>
            <div className={styles.priceBody}>
                <span className={styles.priceNumber}>{data.price}</span>
                <AppIcon icon='currency' type='primary' />
            </div>
            <p className={styles.name}>{data.name}</p>
            {count > 0 && <Counter count={count} extraClass={styles.counter} />}
        </article>
      </Link>
    );
};

export default BurgerCardIngredient;
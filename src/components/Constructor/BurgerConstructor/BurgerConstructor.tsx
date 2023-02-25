import React, {FC} from 'react';
import ConstructorOrder from "../ContructorOrder/ContructorOrder";
import styles from './BurgerConstructor.module.css';
import {useDispatch, useSelector} from "react-redux";
import {useDrop} from "react-dnd";
import { addIngredientToConstructor} from "../../../services/actions/burgerConstructor";
import ConstructorCard from "../ConstructorCard/ConstructorCard";
import EmptyConstructorElement from "./EmptyConstructorElement";
import {BUN_BOTTOM, BUN_INGREDIENT, BUN_TOP} from "../../../utils/consts";
import ConstructorBunCard from "../ConstructorBunCard/ConstructorBunCard";
import {IIngredient, IState} from "../../../utils/types";

const BurgerConstructor: FC = () => {
    const dispatch = useDispatch();
    const { ingredients, bun } = useSelector((state: IState) => state.burgerConstructor);
    const [{isHover, dragIngredient}, dropTarget] = useDrop({
      accept: "ingredient",
      collect: monitor => ({
        isHover: monitor.isOver(),
        dragIngredient: monitor.getItem<IIngredient>(),
      }),
      drop(ingredient) {
        // @ts-ignore
          dispatch(addIngredientToConstructor(ingredient))
      },
    });

    return (
        <div className={styles.body} ref={dropTarget}>
            <ConstructorBunCard
                bun={bun}
                isHover={isHover}
                dragIngredientType={dragIngredient?.type}
                type={BUN_TOP}
            />
            {
                ingredients.length === 0 ?
                    <EmptyConstructorElement isHover={isHover && dragIngredient.type !== BUN_INGREDIENT}>
                      Выберите начинку
                    </EmptyConstructorElement> :
                    <ul className={`${styles.list} mb-2 pr-4`}>
                        {ingredients.map(ing => (
                            <li key={ing.key}>
                                <ConstructorCard ingredient={ing} />
                            </li>
                        ))}
                    </ul>
            }
            <ConstructorBunCard
                bun={bun}
                isHover={isHover}
                dragIngredientType={dragIngredient?.type}
                type={BUN_BOTTOM}
            />

            <ConstructorOrder />
        </div>
    );
};

export default BurgerConstructor;
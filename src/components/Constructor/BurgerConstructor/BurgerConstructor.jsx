import React from 'react';
import {ConstructorElement} from "@ya.praktikum/react-developer-burger-ui-components";
import ConstructorOrder from "../ContructorOrder/ContructorOrder";
import styles from './BurgerConstructor.module.css';
import {useDispatch, useSelector} from "react-redux";
import {useDrop} from "react-dnd";
import {ADD_CONSTRUCTOR_INGREDIENT} from "../../../services/actions/burgerConstructor";
import ConstructorCard from "../ConstructorCard/ConstructorCard";
import EmptyConstructorElement from "./EmptyConstructorElement";
import {BUN_INGREDIENT} from "../../../utils/consts";

const BurgerConstructor = () => {
    const dispatch = useDispatch();
    const { ingredients, bun } = useSelector(state => state.burgerConstructor);
    const [{isHover, dragIngredient}, dropTarget] = useDrop({
      accept: "ingredient",
      collect: monitor => ({
        isHover: monitor.isOver(),
        dragIngredient: monitor.getItem(),
      }),
      drop(ingredient) {
        dispatch({
          type: ADD_CONSTRUCTOR_INGREDIENT,
          value: ingredient,
        })
      },
    });

    return (
        <div className={styles.body} ref={dropTarget}>
            { !bun._id ?
                <EmptyConstructorElement type="top" isHover={isHover && dragIngredient.type === BUN_INGREDIENT}>
                  Выберете булки
                </EmptyConstructorElement> :
                <div className={`${styles.bun} mb-4 pr-4`}>
                    <ConstructorElement
                        type="top"
                        isLocked={true}
                        text={`${bun.name} (верх)`}
                        price={bun.price}
                        thumbnail={bun.image_mobile}
                    />
                </div>
            }

            {
                !ingredients.length ?
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

            { !bun._id ?
                <EmptyConstructorElement type="bottom" isHover={isHover && dragIngredient.type === BUN_INGREDIENT}>
                  Выберете булки
                </EmptyConstructorElement> :
                <div className={`${styles.bun} mb-10 pr-4`}>
                    <ConstructorElement
                      type="bottom"
                      isLocked={true}
                      text={`${bun.name} (низ)`}
                      price={bun.price}
                      thumbnail={bun.image_mobile}
                    />
              </div>
            }

            <ConstructorOrder />
        </div>
    );
};

export default BurgerConstructor;
import React, {useMemo} from 'react';
import {ConstructorElement} from "@ya.praktikum/react-developer-burger-ui-components";
import {iconColorTypes, iconTypes} from "../../../utils/icon-types";
import AppIcon from "../../UI/AppIcon/AppIcon";
import ConstructorOrder from "../ContructorOrder/ContructorOrder";
import styles from './BurgerConstructor.module.css';
import PropTypes from "prop-types";
import {ingredientPropTypes} from "../../../utils/props";

const BUN_INGREDIENT = 'bun';

const BurgerConstructor = ({data}) => {
    const ingredientsWithoutBuns = useMemo(() => data.filter(ing => ing.type !== BUN_INGREDIENT), [data]);
    const buns = useMemo(() => data.filter( ing => ing.type === BUN_INGREDIENT), [data]);
    const [upBun, downBun] = buns;

    return (
        <>
            { upBun &&
                (
                    <div className={`${styles.bun} mb-4 pr-4`}>
                        <ConstructorElement
                            type="top"
                            isLocked={true}
                            text={upBun.name}
                            price={upBun.price}
                            thumbnail={upBun.image_mobile}
                        />
                    </div>
                )
            }

            <ul className={`${styles.list} mb-2 pr-4`}>
                {ingredientsWithoutBuns.map(ing => (
                    <li key={ing._id}>
                        <div className={styles.ingredientItem}>
                            <AppIcon icon={iconTypes.DRAG} type={iconColorTypes.PRIMARY}/>
                            <ConstructorElement
                                isLocked={false}
                                text={ing.name}
                                price={ing.price}
                                thumbnail={ing.image_mobile}
                            />
                        </div>
                    </li>
                ))}
            </ul>

            { downBun &&
                (
                    <div className={`${styles.bun} mb-10 pr-4`}>
                        <ConstructorElement
                            type="bottom"
                            isLocked={true}
                            text={downBun.name}
                            price={downBun.price}
                            thumbnail={downBun.image_mobile}
                        />
                    </div>
                )
            }

            <ConstructorOrder number={610} />
        </>

    );
};

BurgerConstructor.propTypes = {
  data: PropTypes.arrayOf(ingredientPropTypes.isRequired).isRequired,
}

export default BurgerConstructor;
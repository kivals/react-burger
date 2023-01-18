import React from 'react';
import {ConstructorElement} from "@ya.praktikum/react-developer-burger-ui-components";
import {iconColorTypes, iconTypes} from "../../../utils/icon-types";
import AppIcon from "../../UI/AppIcon/AppIcon";
import ConstructorOrder from "../ContructorOrder/ContructorOrder";
import styles from './BurgerConstructor.module.css';
import { BurgerConstructorContext } from "../../../services/constructorContext";

const BUN_INGREDIENT = 'bun';

const BurgerConstructor = () => {
  const [ totalPrice, setTotalPrice ] = React.useState(0);
  const { ingredients } = React.useContext(BurgerConstructorContext);

    const ingredientsWithoutBuns = React.useMemo(() => ingredients.filter(ing => ing.type !== BUN_INGREDIENT), [ingredients]);
    const bun = React.useMemo(() => ingredients.find( ing => ing.type === BUN_INGREDIENT), [ingredients]);

    React.useEffect(() => {
      const price = ingredientsWithoutBuns.reduce((sum, cur) => sum + cur.price, 0) + bun.price * 2;
      setTotalPrice(price);
    }, [ingredientsWithoutBuns, bun]);

    return (
        <>
            { bun &&
                (
                    <div className={`${styles.bun} mb-4 pr-4`}>
                        <ConstructorElement
                            type="top"
                            isLocked={true}
                            text={`${bun.name} (верх)`}
                            price={bun.price}
                            thumbnail={bun.image_mobile}
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

            { bun &&
                (
                    <div className={`${styles.bun} mb-10 pr-4`}>
                        <ConstructorElement
                            type="bottom"
                            isLocked={true}
                            text={`${bun.name} (низ)`}
                            price={bun.price}
                            thumbnail={bun.image_mobile}
                        />
                    </div>
                )
            }

            <ConstructorOrder number={totalPrice} />
        </>

    );
};

export default BurgerConstructor;
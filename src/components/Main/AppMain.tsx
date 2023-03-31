import React, {FC} from 'react';
import BurgerIngredients from "../Ingredients/BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "../Constructor/BurgerConstructor/BurgerConstructor";
import mainStyles from './Main.module.css';
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";
import Loader from "../UI/AppLoader/Loader";
import {useSelector} from "../../services/hooks";

const AppMain: FC = () => {
    const { ingredients, isLoading, hasError } = useSelector((state) => state.ingredients);

    return (
        <>
            {hasError && <div>УПС что-то пошло не так...</div>}

            {isLoading && (<Loader size="large"/>)}

            {!isLoading && !hasError && (
                <DndProvider backend={HTML5Backend}>
                    <h1 className={mainStyles.title}>Собери бургер</h1>
                    <div className={mainStyles.main}>
                        <section className={`${mainStyles.ingredients} pt-10`}>
                            <BurgerIngredients data={ingredients} />
                        </section>
                        <section className={`${mainStyles.constructor} pt-25`}>
                            <BurgerConstructor />
                        </section>
                    </div>

                </DndProvider>
            )}
        </>
    );
};

export default AppMain;
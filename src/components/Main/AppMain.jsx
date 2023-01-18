import React from 'react';
import BurgerIngredients from "../Ingredients/BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "../Constructor/BurgerConstructor/BurgerConstructor";
import { BurgerConstructorContext } from "../../services/constructorContext";
import mainStyles from './Main.module.css';
import { GET_INGREDIENTS_URL } from "../../utils/consts";
import {generateMockConstructorData, getDataFromApi} from "../../utils/utils";

const AppMain = () => {
    const [apiData, setApiData] = React.useState([]);
    const [isError, setIsError] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(true);
    const [constructorIngredients, setConstructorIngredients] = React.useState([]);

    React.useEffect( () => {
        const fetchData = async () => {
            setIsError(false);
            setIsLoading(true);
            try {
                const result = await getDataFromApi(GET_INGREDIENTS_URL);
                setApiData(result.data);

                // TODO Формирование моковых данных для конструктора
                setConstructorIngredients(generateMockConstructorData(result.data));
            } catch (error) {
                setIsError(true);
                console.error(error);
            }
            setIsLoading(false);
        };

        fetchData();
    }, []);

    return (
        <main className={`${mainStyles.main} container`}>
            {isError && <div>УПС что-то пошло не так...</div>}

            {isLoading && (<div>Загрузка ...</div>)}

            {!isLoading && !isError && (
                <>
                    <section className='pt-10'>
                        <BurgerIngredients data={apiData} />
                    </section>
                    <section className='pt-25'>
                        <BurgerConstructorContext.Provider value={{ingredients: constructorIngredients}} >
                            <BurgerConstructor />
                        </BurgerConstructorContext.Provider>
                    </section>
                </>
            )}
        </main>
    );
};

export default AppMain;
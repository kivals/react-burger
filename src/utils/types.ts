export type TIconTypes = 'secondary' | 'primary' | 'error' | 'success';

export type TIconNames = 'currency' | 'burger' | 'list' | 'drag' | 'close' | 'profile';

export type TLoaderSizeName = 'small' | 'medium' | 'large';

export type TLoaderSizesLib = { [lsn in TLoaderSizeName]: number };

export type TIngredientTypes = 'bun' | 'main' | 'sauce';

export interface IIngredient {
    _id: string,
    name: string,
    type: TIngredientTypes,
    proteins: number,
    fat: number,
    carbohydrates: number,
    calories: number,
    price: number,
    image: string,
    image_mobile: string,
    image_large: string,
    __v: number,
    key: string
}

export interface IState {
    ingredients: IIngredientsState
    burgerConstructor: IBurgerConstructorState
}

export interface IIngredientsState {
    ingredients: IIngredient[],
    isLoading: boolean,
    hasError: boolean
}

export interface IBurgerConstructorState {
    bun: IIngredient,
    ingredients: IIngredient[],
}

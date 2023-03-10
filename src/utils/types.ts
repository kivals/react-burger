export type TIconTypes = 'secondary' | 'primary' | 'error' | 'success';

export type TIconNames = 'currency' | 'burger' | 'list' | 'drag' | 'close' | 'profile';

export type TLoaderSizeName = 'small' | 'medium' | 'large';

export type TLoaderSizesLib = { [lsn in TLoaderSizeName]: number };

export type TIngredientTypes = 'bun' | 'main' | 'sauce';

export type TBunTypes = 'top' | 'bottom';

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

export interface IBunIngredient extends IIngredient {
    type: 'bun'
}

export interface IState {
    ingredients: IIngredientsState,
    burgerConstructor: IBurgerConstructorState,
    order: IOrderState,
    auth: IAuthState
}

export interface IIngredientsState {
    ingredients: IIngredient[],
    isLoading: boolean,
    hasError: boolean
}

export interface IBurgerConstructorState {
    bun: IBunIngredient,
    ingredients: IIngredient[],
}

export interface IAuthState {
    user: IUserState,
    isAuth: boolean,
    isAuthChecked: boolean,
    isLoading: boolean,
    errorMessage: string,
    successUpdate: boolean,
    successRestorePassword: boolean,
    isResetPasswordPage: boolean,
}

export interface IUserState {

}

export interface IOrderState {
    orderInfo: IOrderInfoState,
    isLoading: boolean,
    hasError: boolean,
}

export interface IOrderInfoState {
    number: string,
    name: string
}

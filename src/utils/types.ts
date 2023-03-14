export type TIconTypes = 'secondary' | 'primary' | 'error' | 'success';

export type TIconNames = 'currency' | 'burger' | 'list' | 'drag' | 'close' | 'profile';

export type TLoaderSizeName = 'small' | 'medium' | 'large';

export type TLoaderSizesLib = { [lsn in TLoaderSizeName]: number };

export type TIngredientTypes = 'bun' | 'main' | 'sauce';

export type TBunTypes = 'top' | 'bottom';

export type TRawIngredient = {
    _id: string;
    name: string;
    type: TIngredientTypes;
    proteins: number;
    fat: number;
    carbohydrates: number;
    calories: number;
    price: number;
    image: string;
    image_mobile: string;
    image_large: string;
    __v: number;
}

export type TRawOrder = {
    name: string;
    number: string;
}

export type TIngredient = TRawIngredient & { key: string, order: number}

export type TBunIngredient = TIngredient & {type: 'bun'}

export type TUser = {
    readonly id: number;
    readonly password: string;
    readonly email: string;
    readonly name: string;
};



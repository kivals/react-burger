import {TIngredient, TOrder, TOrders, TRawIngredient, TUserOrders} from "./types";

export const ingredientTest: TIngredient = {
  "_id": "60d3b41abdacab0026a733cd",
  "name": "Соус фирменный Space Sauce",
  "type": "sauce",
  "proteins": 50,
  "fat": 22,
  "carbohydrates": 11,
  "calories": 14,
  "price": 80,
  "image": "https://code.s3.yandex.net/react/code/sauce-04.png",
  "image_mobile": "https://code.s3.yandex.net/react/code/sauce-04-mobile.png",
  "image_large": "https://code.s3.yandex.net/react/code/sauce-04-large.png",
  "__v": 0,
  "key": "123",
  "order": 1
}

export const anotherIngredientTest: TIngredient = {
  "_id": "80d3b41abdacab0026a733cc",
  "name": "Соус Spicy-X",
  "type": "sauce",
  "proteins": 30,
  "fat": 20,
  "carbohydrates": 40,
  "calories": 30,
  "price": 90,
  "image": "https://code.s3.yandex.net/react/code/sauce-02.png",
  "image_mobile": "https://code.s3.yandex.net/react/code/sauce-02-mobile.png",
  "image_large": "https://code.s3.yandex.net/react/code/sauce-02-large.png",
  "__v": 0,
  "key": "321",
  "order": 2
}

export const rawIngredientTest: TRawIngredient = {
  "_id": "60d3b41abdacab0026a733cd",
  "name": "Соус фирменный Space Sauce",
  "type": "sauce",
  "proteins": 50,
  "fat": 22,
  "carbohydrates": 11,
  "calories": 14,
  "price": 80,
  "image": "https://code.s3.yandex.net/react/code/sauce-04.png",
  "image_mobile": "https://code.s3.yandex.net/react/code/sauce-04-mobile.png",
  "image_large": "https://code.s3.yandex.net/react/code/sauce-04-large.png",
  "__v": 0,
}

export const anotherRawIngredientTest: TRawIngredient = {
  "_id": "80d3b41abdacab0026a733cc",
  "name": "Соус Spicy-X",
  "type": "sauce",
  "proteins": 30,
  "fat": 20,
  "carbohydrates": 40,
  "calories": 30,
  "price": 90,
  "image": "https://code.s3.yandex.net/react/code/sauce-02.png",
  "image_mobile": "https://code.s3.yandex.net/react/code/sauce-02-mobile.png",
  "image_large": "https://code.s3.yandex.net/react/code/sauce-02-large.png",
  "__v": 0,
}

export const bunTest: TIngredient = {
  "_id": "60d3b41abdacab0026a733cd",
  "name": "Соус фирменный Space Sauce",
  "type": "bun",
  "proteins": 50,
  "fat": 22,
  "carbohydrates": 11,
  "calories": 14,
  "price": 80,
  "image": "https://code.s3.yandex.net/react/code/sauce-04.png",
  "image_mobile": "https://code.s3.yandex.net/react/code/sauce-04-mobile.png",
  "image_large": "https://code.s3.yandex.net/react/code/sauce-04-large.png",
  "__v": 0,
  "key": "",
  "order": 2
}

export const orderDataTest = {
  name: "Булка на века",
  number: "666"
}

export const wsOrderDataTest = {
  ingredients: ["111", "222"],
  _id: "3333b41abdacab0026a733cd",
  status: "ready",
  number: 3,
  createdAt: "",
  updatedAt: "",
  name: "Булка1"
}

export const wsAnotherOrderDataTest = {
  ingredients: ["111", "222"],
  _id: "5553b41abdacab0026a733cd",
  status: "ready",
  number: 5,
  createdAt: "",
  updatedAt: "",
  name: "Булка1"
}

export const wsUserOrderServerDataTest: TUserOrders = {
  success: true,
  orders: [wsOrderDataTest, wsAnotherOrderDataTest]
}


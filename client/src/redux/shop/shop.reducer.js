import { ShopActionTypes } from "./shop.types";

const INITIAL_STATE = {
  shoplist: []
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ShopActionTypes.GET_ITEMS:
      return {
        ...state,
        shoplist: action.payload
      };
    default:
      return state;
  }
};

export default shopReducer;

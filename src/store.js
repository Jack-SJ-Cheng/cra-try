import { createContext } from "react";

function calculateTotalPrice(state) {
  return state.cartList
    .map(item => item.price * item.quantity)
    .reduce((a, b) => a + b, 0);
}

export const CartContext = createContext({});

export const cartReducer = (state, action) => {
  const index = state.cartList.findIndex(item => item.id === action.payload.id);
  switch (action.type) {
    case "ADD_TO_CART":
      if (index === -1) {
        state.cartList.push(action.payload);
      } else {
        state.cartList[index].quantity += action.payload.quantity;
      }
      return {
        ...state,
        cartList: [...state.cartList],
        total: calculateTotalPrice(state),
      };
    case "UPDATE_QTY":
      state.cartList[index].quantity = action.payload.quantity;
      return {
        ...state,
        cartList: [...state.cartList],
        total: calculateTotalPrice(state),
      };
    case "REMOVE_ITEM":
      state.cartList.splice(index, 1);
      return {
        ...state,
        cartList: [...state.cartList],
        total: calculateTotalPrice(state),
      };
    default:
      return state;
  }
};

export const initialState = {
  cartList: [],
};

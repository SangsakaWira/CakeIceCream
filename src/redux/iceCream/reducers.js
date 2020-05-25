import { BUY_ICECREAM, SELL_ICECREAM } from "./actionTypes";

const initialState = {
  numOfIceCream: 0
};

export const iceCreamReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numOfIceCream: state.numOfIceCream + 1
      };
    case SELL_ICECREAM:
      return {
        ...state,
        numOfIceCream: state.numOfIceCream - 1
      };
    default:
      return state;
  }
};

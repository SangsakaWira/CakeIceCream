import { BUY_ICECREAM, SELL_ICECREAM } from "./actionTypes";

const initialState = {
  numOfIceCream: 0
};

const iceCreamReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numOfCakes: state.numOfIceCream + 1
      };
    case SELL_ICECREAM:
      return {
        ...state,
        numOfCakes: state.numOfIceCream - 1
      };
    default:
      return {
        ...state
      };
  }
};

export default iceCreamReducer;

import { ActionTypes } from './Actions';
const initialState = {
  cart: [],
  productList: []
}
const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.REQUEST_PRODUCTS:
      return {
        ...state,
        productList: action.payload.products
      };
    case ActionTypes.CHECKOUT:
      return {
        ...state,
        cart: []
      };
    case ActionTypes.ADD_TO_CART:
      const product = state.productList.find(({ id }) => id === action.payload.id);
      return {
        ...state,
        cart: [...state.cart, product]
      }
    default:
      return state;
  }
}

export default Reducer;
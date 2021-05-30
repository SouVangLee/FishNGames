import {
  RECEIVE_ALL_CART_ITEMS,
  RECEIVE_CART_ITEM_ERRORS
} from '../actions/cart_item_actions';

const CartItemErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_CART_ITEMS:
      return [];
    case RECEIVE_CART_ITEM_ERRORS:
      return action.errors;
    default:
      return state;
  }
}

export default CartItemErrorsReducer;
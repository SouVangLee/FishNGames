import {
  RECEIVE_ALL_CART_ITEMS,
  REMOVE_CART_ITEM
} from '../actions/cart_item_actions';

const CartItemsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_CART_ITEMS:
      return Object.assign({}, action.cartItems)
    case REMOVE_CART_ITEM:
      const newState = Object.assign({}, state);
      delete newState[action.cartItemId];
      return newState;
    default:
      return {...state};
  }
};

export default CartItemsReducer;
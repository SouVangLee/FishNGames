import * as CartItemApiUtil from '../util/cart_item_utils'

export const RECEIVE_ALL_CART_ITEMS = "RECEIVE_ALL_CART_ITEMS";
export const REMOVE_CART_ITEM = "REMOVE_CART_ITEM";
export const RECEIVE_CART_ITEM_ERRORS = "RECEIVE_CART_ITEM_ERRORS";

const receiveAllCartItems = cartItems => ({
  type: RECEIVE_ALL_CART_ITEMS,
  cartItems
});

const removeCartItem = cartItemId => ({
  type: REMOVE_CART_ITEM,
  cartItemId
});

export const receiveErrors = errors => ({
  type: RECEIVE_CART_ITEM_ERRORS,
  errors
});

export const fetchAllCartItems = () => dispatch => {
  return CartItemApiUtil.fetchAllCartItems()
    .then(
      cartItems => dispatch(receiveAllCartItems(cartItems)),
      errors => dispatch(receiveErrors(errors.responseJSON))
    );
};

export const createCartItem = cartItem => dispatch => {
  return CartItemApiUtil.createCartItem(cartItem)
    .then(
      cartItems => dispatch(receiveAllCartItems(cartItems)),
      errors => dispatch(receiveErrors(errors.responseJSON))
    );
};

export const updateCartItem = cartItem => dispatch => {
  return CartItemApiUtil.updateCartItem(cartItem)
    .then(
      cartItems => dispatch(receiveAllCartItems(cartItems)),
      errors => dispatch(receiveErrors(errors.responseJSON))  
    );
};

export const deleteCartItem = cartItemId => dispatch => {
  return CartItemApiUtil.deleteCartItem(cartItemId)
    .then(
      () => dispatch(removeCartItem(cartItemId)),
      errors => dispatch(receiveErrors(errors.responseJSON))
    );
};
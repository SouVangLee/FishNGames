import * as CartItemApiUtil from '../util/cart_item_utils'

export const RECEIVE_ALL_CART_ITEMS = "RECEIVE_ALL_CART_ITEMS"
export const REMOVE_CART_ITEM = "REMOVE_CART_ITEM"

const receiveAllCartItems = cartItems => ({
  type: RECEIVE_ALL_CART_ITEMS,
  cartItems
});

const removeCartItem = cartItemId => ({
  type: REMOVE_CART_ITEM,
  cartItemId
});

export const fetchAllCartItems = () => dispatch => {
  return CartItemApiUtil.fetchAllCartItems()
    .then(cartItems => dispatch(receiveAllCartItems(cartItems)));
};

export const createCartItem = cartItem => dispatch => {
  return CartItemApiUtil.createCartItem(cartItem)
    .then(cartItems => dispatch(receiveAllCartItems(cartItems)));
};

export const updateCartItem = cartItem => dispatch => {
  return CartItemApiUtil.updateCartItem(cartItem)
    .then(cartItems => dispatch(receiveAllCartItems(cartItems)));
};

export const deleteCartItem = cartItemId => dispatch => {
  return CartItemApiUtil.deleteCartItem(cartItemId)
    .then(() => dispatch(removeCartItem(cartItemId)));
};
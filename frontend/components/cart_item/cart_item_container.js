import { connect } from 'react-redux';
import { 
  fetchAllCartItems, 
  updateCartItem,
  deleteCartItem } from '../../actions/cart_item_actions';
import CartItem from './cart_item';

const mSTP = (state, ownProps) => {
  return {
    cartItems: Object.values(state.entities.cartItems)
  };
};

const mDTP = dispatch => {
  return {
    fetchAllCartItems: () => dispatch(fetchAllCartItems()),
    updateCartItem: cartItem => dispatch(updateCartItem(cartItem)),
    deleteCartItem: cartItemId => dispatch(deleteCartItem(cartItemId))
  }
}

export default connect(mSTP, mDTP)(CartItem);
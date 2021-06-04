import { connect } from 'react-redux';
import { 
  fetchAllCartItems, 
  updateCartItem,
  deleteCartItem } from '../../actions/cart_item_actions';
import CartItemIndex from './cart_item_index';

const mSTP = (state, ownProps) => {
  return {
    cartItems: Object.values(state.entities.cartItems),
    currentUserId: state.session.currentUserId 
  };
};

const mDTP = dispatch => {
  return {
    fetchAllCartItems: () => dispatch(fetchAllCartItems()),
    updateCartItem: cartItem => dispatch(updateCartItem(cartItem)),
    deleteCartItem: cartItemId => dispatch(deleteCartItem(cartItemId))
  }
}

export default connect(mSTP, mDTP)(CartItemIndex);
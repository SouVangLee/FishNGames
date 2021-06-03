import { connect } from 'react-redux';
import { fetchProduct, fetchAllProducts } from '../../actions/product_actions';
import { createCartItem } from '../../actions/cart_item_actions';
import Product from './product_show';

const mSTP = (state, ownProps) => {
  return {
    product: state.entities.products[ownProps.match.params.id],
    products: Object.values(state.entities.products),
    currentUserId: state.session.currentUserId,
    // errors: state.errors.cartItem
  };
};

const mDTP = dispatch => {
  return {
    fetchProduct: productId => dispatch(fetchProduct(productId)),
    fetchAllProducts: () => dispatch(fetchAllProducts()),
    createCartItem: cartItem => dispatch(createCartItem(cartItem))
  };
};

export default connect(mSTP, mDTP)(Product);
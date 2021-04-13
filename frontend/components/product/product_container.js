import { connect } from 'react-redux';
import { fetchProduct } from '../../actions/product_actions';
import Product from './product_show';

const mSTP = (state, ownProps) => {
  return {
    product: state.entities.products[ownProps.match.params.id],
    products: Object.values(state.entities.products)
  };
};

const mDTP = dispatch => {
  return {
    fetchProduct: productId => dispatch(fetchProduct(productId)),
    fetchAllProducts: () => dispatch(fetchAllProducts())
  };
};

export default connect(mSTP, mDTP)(Product);
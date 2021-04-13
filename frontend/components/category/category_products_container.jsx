import { connect } from 'react-redux';
import { fetchCategoryProducts, fetchAllCategories } from '../../actions/category_actions';
import CategoryProducts from './category_products';

const mSTP = (state, ownProps) => ({
  products: Object.values(state.entities.productsByCategory),
});

const mDTP = dispatch => ({
  fetchCategoryProducts: categoryId => dispatch(fetchCategoryProducts(categoryId)),
});

export default connect(mSTP, mDTP)(CategoryProducts);
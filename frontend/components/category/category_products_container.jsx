import { connect } from 'react-redux';
import { fetchCategoryProducts, fetchAllCategories } from '../../actions/category_actions';
import CategoryProducts from './category_products_show';

const mSTP = (state, ownProps) => ({
  products: Object.values(state.entities.productsByCategory),
  categories: state.entities.categories
});

const mDTP = dispatch => ({
  fetchCategoryProducts: categoryId => dispatch(fetchCategoryProducts(categoryId)),
  fetchAllCategories: () => dispatch(fetchAllCategories())
});

export default connect(mSTP, mDTP)(CategoryProducts);
import { connect } from 'react-redux';
import { fetchAllCategories } from '../../actions/category_actions';
import { fetchAllProducts } from '../../actions/product_actions';
import CategoryNav from './category_nav';

const mSTP = state => ({
  categories: Object.values(state.entities.categories),

});

const mDTP = dispatch => ({
  fetchAllCategories: () => dispatch(fetchAllCategories()),
  // fetchAllProducts: () => dispatch(fetchAllProducts())

});

export default connect(mSTP, mDTP)(CategoryNav);
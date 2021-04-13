import { connect } from 'react-redux';
import { fetchAllProducts } from '../../actions/product_actions';
import Splash from './splash';
import { fetchAllCategories } from '../../actions/category_actions'; 

const mSTP = state => ({
  products: Object.values(state.entities.products),
  categories: state.entities.categories
});

const mDTP = dispatch => ({
  // fetchAllProducts: () => dispatch(fetchAllProducts()),
  // fetchAllCategories: () => dispatch(fetchAllCategories())
});

export default connect(mSTP, mDTP)(Splash);
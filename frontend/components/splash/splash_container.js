import { connect } from 'react-redux';
import { fetchAllProducts } from '../../actions/product_actions';
import Splash from './splash';

const mSTP = state => ({
  products: Object.values(state.entities.products),
  categories: state.entities.categories
});

const mDTP = dispatch => ({
  fetchAllProducts: () => dispatch(fetchAllProducts())
});

export default connect(mSTP, mDTP)(Splash)
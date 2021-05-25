import { connect } from 'react-redux';
import { fetchAllProducts } from '../../actions/product_actions';
import SearchIndex from './search_index';

const mSTP = state => ({
  products: Object.values(state.entities.products)
});

const mDTP = dispatch => ({
  fetchAllProducts: () => dispatch(fetchAllProducts())
});

export default connect(mSTP, mDTP)(SearchIndex);
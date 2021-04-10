import { 
  RECEIVE_ALL_PRODUCTS,
  RECEIVE_PRODUCT
} from '../actions/product_actions';

const ProductsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ALL_PRODUCTS:
      return Object.assign({}, action.products);
    case RECEIVE_PRODUCT:
      return Object.assign({}, state, {[action.product.id]: action.product})
    default:
      return state;
  }
}

export default ProductsReducer;
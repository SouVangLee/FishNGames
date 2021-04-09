import { RECEIVE_CATEGORY } from '../actions/category_actions';

const CategoryProductsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CATEGORY:
      return Object.assign({}, action.products);
    default:
      return state;
  }
}

export default CategoryProductsReducer;
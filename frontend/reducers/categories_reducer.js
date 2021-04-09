import { RECEIVE_ALL_CATEGORIES } from '../actions/category_actions';

const CategoriesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_CATEGORIES:
      return Object.assign({}, action.categories);
    default:
      return state;
  }
}

export default CategoriesReducer;
import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import CategoriesReducer from './categories_reducer';
import CategoryProductsReducer from './category_products_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  categories: CategoriesReducer,
  productsByCategory: CategoryProductsReducer
});

export default entitiesReducer;
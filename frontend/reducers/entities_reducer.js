import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import CategoriesReducer from './categories_reducer';
import CategoryProductsReducer from './category_products_reducer';
import ProductsReducer from './products_reducer';
import ReviewsReducer from './reviews_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  categories: CategoriesReducer,
  productsByCategory: CategoryProductsReducer,
  products: ProductsReducer,
  reviews: ReviewsReducer
});

export default entitiesReducer;
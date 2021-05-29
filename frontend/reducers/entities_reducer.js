import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import CategoriesReducer from './categories_reducer';
import CategoryProductsReducer from './category_products_reducer';
import ProductsReducer from './products_reducer';
import ReviewsReducer from './reviews_reducer';
import CartItemsReducer from './cart_items_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  categories: CategoriesReducer,
  productsByCategory: CategoryProductsReducer,
  products: ProductsReducer,
  reviews: ReviewsReducer,
  cartItems: CartItemsReducer
});

export default entitiesReducer;
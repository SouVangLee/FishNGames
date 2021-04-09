import * as CategoryApiUtil from '../util/category_utils';

export const RECEIVE_ALL_CATEGORIES = "RECEIVE_ALL_CATEGORIES";
export const RECEIVE_CATEGORY = "RECEIVE_CATEGORY";

const receiveAllCategories = categories => {
  return {
    type: RECEIVE_ALL_CATEGORIES,
    categories
  };
};

const receiveCategory = products => {
  return {
    type: RECEIVE_CATEGORY,
    products
  };
};

export const fetchAllCategories = () => dispatch => {
  return CategoryApiUtil.fetchAllCategories()
    .then(categories => dispatch(receiveAllCategories(categories)));
};

export const fetchAllProducts = categoryId => dispatch => {
  return CategoryApiUtil.fetchAllProducts(categoryId)
    .then(products => dispatch(receiveCategory(products)));
};
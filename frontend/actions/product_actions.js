import * as ProductApiUtil from '../util/product_utils';

export const RECEIVE_ALL_PRODUCTS = "RECEIVE_ALL_PRODUCTS";
export const RECEIVE_PRODUCT = "RECEIVE_PRODUCT";
export const RECEIVE_PRODUCT_ERRORS = "RECEIVE_PRODUCT_ERRORS";

const receiveAllProducts = (products) => ({
  type: RECEIVE_ALL_PRODUCTS,
  products
});

const receiveProduct = product => ({
  type: RECEIVE_PRODUCT,
  product
});

const receiveProductErrors = errors => ({
  type: RECEIVE_PRODUCT_ERRORS,
  errors
});

export const fetchAllProducts = () => dispatch => {
  return ProductApiUtil.fetchAllProducts()
    .then(
      products => dispatch(receiveAllProducts(products)),
      errors => receiveProductErrors(errors.responseJSON)
    );
};

export const fetchProduct = productId => dispatch => {
  return ProductApiUtil.fetchProduct(productId)
    .then(
      product => dispatch(receiveProduct(product)),
      errors => receiveProductErrors(errors.responseJSON)
    );
};
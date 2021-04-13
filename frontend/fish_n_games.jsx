import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from "./components/root"
import { fetchAllProducts, fetchProduct } from './actions/product_actions';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  let store;
  let preloadedState = undefined;
  if (window.currentUser) {
    preloadedState = {
      entities: { users: { [window.currentUser.id]: window.currentUser}},
      session: { currentUserId: window.currentUser.id },
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  window.preloadedState = preloadedState;

  //testing
  window.fetchAllProducts = fetchAllProducts;
  window.fetchProduct = fetchProduct;
  window.store = store;

  
  ReactDOM.render(<Root store={store}/>, root);
});
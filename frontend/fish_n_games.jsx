import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from "./components/root"
import { fetchAllCategories, fetchAllProducts } from './actions/category_actions';

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
  window.fetchAllCategories = fetchAllCategories;
  window.fetchAllProducts = fetchAllProducts;
  window.store = store;

  
  ReactDOM.render(<Root store={store}/>, root);
});
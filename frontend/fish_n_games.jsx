import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from "./components/root"

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  let store;
  let preloadedState = undefined;
  if (window.currentUser) {
    preloadedState = {
      session: { currentUserId: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  window.preloadedState = preloadedState;

  
  ReactDOM.render(<Root store={store}/>, root);
});
import React from "react";
import ReactDOM from "react-dom";
import { signup, login, logout } from "./util/session_api_util";
import configureStore from "./store/store";

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  const store = configureStore();
  window.store = store;
  window.signup = signup;
  window.login = login;
  window.logout = logout;
  
  ReactDOM.render(<h1>Fish N Games</h1>, root);
})
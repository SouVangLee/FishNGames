import React from 'react';
import { Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import SessionFormContainer from './session/signup_form_container'
import LoginFormContainer from './session/login_form_container';
// import Modal from "./modal/modal";

const App = () => (
  <div>
    {/* <Modal /> */}
    <h1>testing Modal</h1>
    <Route path="/signup" component={SessionFormContainer} />
    {/* <Route path="/login" component={LoginFormContainer} /> */}
  </div>
);

export default App;
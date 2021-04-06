import React from 'react';
import { Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import SessionFormContainer from './session/session_form_container'
// import Modal from "./modal/modal";

const App = () => (
  <div>
    {/* <Modal /> */}
    <h1>testing Modal</h1>
    <Route path="/signup" component={SessionFormContainer} />
  </div>
);

export default App;
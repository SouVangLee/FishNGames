import React from 'react';
import { Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';

import SessionFormContainer from './session/signup_form_container'
import LoginFormContainer from './session/login_form_container';
import Modal from "./modal/modal";

const App = () => (
  <div>
    <Modal />
    <header>
      <Link to="/" className="header-link">
      <h1>Fish N Games</h1>
      </Link>
    </header>
    <Route path="/signup" component={SessionFormContainer} />
    {/* <Route path="/login" component={LoginFormContainer} /> */}
  </div>
);

export default App;
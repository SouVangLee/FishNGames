import React from 'react';
import { Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';

import SessionFormContainer from './session/signup_form_container'
import LoginFormContainer from './session/login_form_container';
import ModalContainer from "./modal/modal_container";
import GreetingContainer from './navbar/greeting_container';
import Greeting from './navbar/greeting';

const App = () => (
  <div>
    <ModalContainer />
    <h1>Fish N Games</h1>
    <header>
      {/* <Link to="/" className="header-link">
      </Link> */}
      <GreetingContainer />
    </header>
    <Route path="/signup" component={SessionFormContainer} />
  </div>
);

export default App;
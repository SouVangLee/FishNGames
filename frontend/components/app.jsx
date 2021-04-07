import React from 'react';
import { Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';

import SessionFormContainer from './session/signup_form_container'
import LoginFormContainer from './session/login_form_container';
import ModalContainer from "./modal/modal_container";
import GreetingContainer from './navbar/greeting_container';
import Greeting from './navbar/greeting';
import { AuthRoute, ProtectedRoute } from '../util/route_utils'; 

const App = () => (
  <div>
    <ModalContainer />
    <h1>Fish N Games</h1>
    <header>
      <GreetingContainer />
    </header>
    <AuthRoute path="/signup" component={SessionFormContainer} />
    <ProtectedRoute exact path="/cart" component={LoginFormContainer} />
  </div>
);


export default App;
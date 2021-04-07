import React from 'react';
import { Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';

import SessionFormContainer from './session/signup_form_container'
import LoginFormContainer from './session/login_form_container';
import ModalContainer from "./modal/modal_container";
import GreetingContainer from './navbar/greeting_container';
import Greeting from './navbar/greeting';
<<<<<<< HEAD
import { AuthRoute, ProtectedRoute } from '../util/route_util';
=======
import { AuthRoute, ProtectedRoute } from '../util/route_utils'; 
>>>>>>> user_setup

const App = () => (
  <div>
    <ModalContainer />
    <h1>Fish N Games</h1>
    <header>
      <GreetingContainer />
    </header>
<<<<<<< HEAD
    <ProtectedRoute exact path="/cart" component={LoginFormContainer} />
    <AuthRoute path="/signup" component={SessionFormContainer} />
=======
    <AuthRoute path="/signup" component={SessionFormContainer} />
    <ProtectedRoute exact path="/login" component={LoginFormContainer} />
>>>>>>> user_setup
  </div>
);

export default App;
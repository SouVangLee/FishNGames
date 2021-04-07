import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import SessionFormContainer from './session/signup_form_container'
import LoginFormContainer from './session/login_form_container';
import ModalContainer from "./modal/modal_container";
import GreetingContainer from './navbar/greeting_container';
import { AuthRoute, ProtectedRoute } from '../util/route_utils';
import Navbar from './navbar/navbar';

const App = () => (
  <div>
    <ModalContainer />
    <Navbar />
    <Switch>
      <ProtectedRoute exact path="/cart" component={LoginFormContainer} />
      <AuthRoute path="/signup" component={SessionFormContainer} />
      
      {/* <Route exact path="/" component={SplashContainer}></Route> */}
      {/* <Route exact path="*" component={PageNotFound}></Route> */}
    </Switch>
  </div>
);


export default App;
import React from 'react';
import { Route, Link, Switch, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';

import SessionFormContainer from './session/signup_form_container'
import LoginFormContainer from './session/login_form_container';
import ModalContainer from "./modal/modal_container";
import GreetingContainer from './navbar/greeting_container';
import { AuthRoute, ProtectedRoute } from '../util/route_utils';
import Navbar from './navbar/navbar';
import Cart from './cart/cart';
import PageNotFound from './page_not_found';
import Splash from './splash/splash';


const App = () => (
  <div>
    <ModalContainer />
    <Navbar />
    <Switch>
      <ProtectedRoute exact path="/cart" component={Cart} />
      <AuthRoute path="/signup" component={SessionFormContainer} />
      <Route exact path="/" component={Splash} />
      <Route path ="/404" component={PageNotFound}/>
      <Redirect to="404" />
    </Switch>
  </div>
);


export default App;
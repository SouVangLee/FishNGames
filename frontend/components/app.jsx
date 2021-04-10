import React from 'react';
import { Route, Link, Switch, Redirect } from 'react-router-dom';

import ModalContainer from "./modal/modal_container";
import { AuthRoute, ProtectedRoute } from '../util/route_utils';
import Navbar from './navbar/navbar';
import Cart from './cart/cart';
import PageNotFound from './page_not_found';
import Splash from './splash/splash';
import CategoryProductsContainer from './category/category_products_container';


const App = () => (
  <div className="app-div">
    <ModalContainer />
    <Navbar />
    <Switch>
      <ProtectedRoute exact path="/cart" component={Cart} />
      <Route exact path="/categories/:id" component={CategoryProductsContainer}></Route>
      <Route exact path="/" component={Splash} />
      <Route component={PageNotFound}/>
    </Switch>
  </div>
);


export default App;
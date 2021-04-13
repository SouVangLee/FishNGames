import React from 'react';
import { Route, Link, Switch, Redirect } from 'react-router-dom';

import ModalContainer from "./modal/modal_container";
import { AuthRoute, ProtectedRoute } from '../util/route_utils';
import Navbar from './navbar/navbar';
import Cart from './cart/cart';
import PageNotFound from './page_not_found';
import SplashContainer from './splash/splash_container';
import CategoryProductsContainer from './category/category_products_container';
import ProductContainer from './product/product_container';


const App = () => (
  <div className="app-div">
    <ModalContainer />
    <Navbar />
    <Switch>
      <ProtectedRoute exact path="/cart" component={ Cart } />
      <Route exact path="/categories/:id" component={CategoryProductsContainer} />
      <Route exact path="/products/:id" component={ ProductContainer } />
      <Route exact path="/" component={ SplashContainer } />
      <Route path="*" component={ PageNotFound }/>
    </Switch>
  </div>
);


export default App;
import React from 'react';
import { Route, Link, Switch, Redirect } from 'react-router-dom';

import ModalContainer from "./modal/modal_container";
import { AuthRoute, ProtectedRoute } from '../util/route_utils';
import Navbar from './navbar/navbar';
import PageNotFound from './page_not_found';
import SplashContainer from './splash/splash_container';
import CategoryProductsContainer from './category/category_products_container';
import ProductContainer from './product/product_container';
import SearchContainer from './search/search_container';
import Footer from './footer';
import CartItemContainer from './cart_item/cart_item_container';


const App = () => (
  <div className="app-div">
    <ModalContainer />
    <Navbar />
    <Switch>
      <Route path="/search" component={ SearchContainer } />
      <ProtectedRoute exact path="/cart" component={ CartItemContainer } />
      <Route exact path="/categories/:id" component={CategoryProductsContainer} />
      <Route exact path="/products/:id" component={ ProductContainer } />
      <Route exact path="/" component={ SplashContainer } />
      <Route path="*" component={ PageNotFound }/>
    </Switch>
    <footer className="footer-main">
      <Footer />
    </footer>
  </div>
);


export default App;
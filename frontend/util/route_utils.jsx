import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, withRouter } from 'react-router-dom';


const mSTP = state => ({
  loggedIn: Boolean(state.session.currentUser)
});

const Auth = ({ loggedIn, exact, path, component: Component }) => {
  return (
    <Route 
      exact={exact}
      path={path}
      render={props => (
          loggedIn ? <Redirect to="/" /> : <Component {...props} />
      )}
    />
  )
}

const Protected = ({ loggedIn, path, component: Component }) => {
  return (
    <Route 
      path={path}
      render={props => (
          loggedIn ? <Component {...props} /> : <Redirect to="/" />
      )}
    />   
  ) 
}

export const AuthRoute = withRouter(connect(mSTP)(Auth));
export const ProtectedRoute = withRouter(connect(mSTP)(Protected));
import { Redirect, Route } from 'react-router-dom';

import React from 'react';
import { connect } from 'react-redux';

const PrivateRoute = ({ component: Component, auth, ...rest }) => (
  <Route
    {...rest}
    render = { props => {
      if (!auth.isAuthenticated) { 
        debugger        
        return <Redirect to='/login' />;
      } else {        
        return <Redirect to='/dashboard' />;
      }
    }}
  />
);

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(PrivateRoute);
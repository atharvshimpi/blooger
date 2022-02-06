import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux"

const user = JSON.parse(localStorage.getItem('profile'));
const PrivateRoute = ({ component: Component, auth, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      (user) ? (
        <>
          <Component {...props} />
          <Redirect to="/dashboard" />
        </>
      ) : (
        <Redirect to="/signin" />
      )
    }
  />
);

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(PrivateRoute);
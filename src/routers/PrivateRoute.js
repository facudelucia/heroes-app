import React from 'react';
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({
    isAuthenticated,
    component: Component,
    ...rest
}) => {
    localStorage.setItem("lastPath", rest.location.pathname);
    return (
        <Route {...rest}
            component={(props) => (
                (isAuthenticated)
                    ? (<Component {...props} />)
                    : (<Redirect to="/login" />)
            )}
        />
    );
}

export default PrivateRoute;


PrivateRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired,

}
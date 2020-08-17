import React from 'react';
import PropTypes from "prop-types";
import {Route, Redirect} from "react-router-dom";

const PrivateRoute = ({
    isAuth,
    component: Component,
    ...rest
}) => {
    localStorage.setItem("lastPath", rest.location.pathname);
    return ( 
        <Route 
            {...rest}
            component={(props) => (
                (isAuth) 
                ? (<Component {...props}/>)
                : (<Redirect to="/login"/>)
            )}
        />
     );
}
 
export default PrivateRoute;


PrivateRoute.propTypes = {
    isAuth: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired,
    
}
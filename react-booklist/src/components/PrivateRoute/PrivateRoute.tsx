import {Route, Redirect} from "react-router-dom";
import React from "react";


export const PrivateRoute = ({component, isAuthenticated, ...rest}: any) => {
    const isLoggedIn = window.sessionStorage.getItem("isLoggedIn");
    const routeComponent = (props: any) => (
        isLoggedIn ==="true"
            ? React.createElement(component, props)
            : <Redirect to={{pathname: '/unauthorized'}}/>
    );
    return <Route {...rest} render={routeComponent}/>;
};

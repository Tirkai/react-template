import { IBrowserRoute } from "interfaces/common/IBrowserRoute";
import React from "react";
import { Route } from "react-router";
export const mapRoutes = (routes: IBrowserRoute[]) =>
    routes.map((route: IBrowserRoute) => {
        const component = route.component as React.ComponentClass;
        return (
            <Route
                key={route.path}
                path={route.path}
                component={component}
                exact={route.exact}
            />
        );
    });

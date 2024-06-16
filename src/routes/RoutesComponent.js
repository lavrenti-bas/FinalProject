import React from "react";
import { useRoutes } from "react-router-dom";
import { HomePage, LoginPage, SignupPage } from "../pages";

const Routes = () => {
    return (
        <div>
            {useRoutes([
                { path: "/login", element: <LoginPage /> },
                { path: "/signup", element: <SignupPage /> },
                { path: "/", element: <HomePage /> }
            ])}
        </div>
    );
};

export default Routes;


import React from "react";
import { useRoutes } from "react-router-dom";
import { HomePage, LoginPage, SignupPage } from "../pages";
import { Layout } from "../components/header/Layout";
import { ProductFormPage } from "../pages";
import ProtectedRoute from "./ProtectedRoute";
import { isUserAdmin } from "../helpers/utils";
import { useUser } from "../hooks";

const Routes = () => {
    const { userData } = useUser();
    return (
        <div>
            {useRoutes([
                { path: "/login", element: <LoginPage /> },
                { path: "/signup", element: <SignupPage /> },
                // { path: "/", element: <HomePage /> }
                {
                    element: <Layout />,
                    children: [
                        {
                            path: "/",
                            element: <HomePage />,
                        },
                        {
                            path: "/products/add",
                            element: (
                                <ProtectedRoute hasAccess={isUserAdmin(userData)}>
                                    <ProductFormPage />
                                </ProtectedRoute>
                            ),
                        },
                    ],
                },
            ])}
        </div>
    );
};

export default Routes;


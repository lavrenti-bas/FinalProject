
import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ hasAccess, children }) => {
  if (!hasAccess) {
    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectedRoute;

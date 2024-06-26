// import React from "react";
import { useSelector } from "react-redux";

export const useUser = () => {
    const loading = useSelector((state) => state.user.loading);
    const error = useSelector((state) => state.user.error);
    const userData = useSelector((state) => state.user.userData);

    return { loading, error, userData };
};

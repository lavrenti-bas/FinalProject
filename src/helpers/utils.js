import { jwtDecode } from "jwt-decode";

export const isUserAdmin = (userData) => {
    return userData?.user?.role?.includes("admin") ?? false;
};

export const isTokenValid = (token) => {

    const expirationDate = jwtDecode(token).exp;
    const isExpired = expirationDate * 1000 < new Date().getTime();
    return isExpired;
};
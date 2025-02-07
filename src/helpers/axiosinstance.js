import axios from "axios";
import {isTokenValid} from "./utils"

export const axiosInstance = axios.create({
    baseURL: "http://localhost:3001/",
});

axiosInstance.interceptors.request.use(async (req) => {
    const token = localStorage.getItem("token");
    const refreshToken = localStorage.getItem("refreshToken");
    
    if (!refreshToken || !token) return req;
  
    const isExpired = isTokenValid(token);
  
    if (!isExpired) {
      req.headers.Authorization = `Bearer ${token}`;
      return req;
    }
  
    try {
      const { data } = await axios.post("http://localhost:3001/users/refresh", {
        refresh_token: refreshToken,
      });
  
      const newToken = data.token;
      localStorage.setItem("token", newToken);
  
      req.headers.Authorization = `Bearer ${newToken}`;
      return req;
    } catch (error) {
      console.error("Error refreshing token:", error);
      return req;
    }
  });
  
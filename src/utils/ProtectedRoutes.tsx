import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
  const isAuthenticated = () => {
    const user = localStorage.getItem("user");
    if (user) {
      const userData = JSON.parse(user);
      return userData.username === "admin" && userData.password === "admin";
    }
    return false;
  };

  return isAuthenticated() ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;

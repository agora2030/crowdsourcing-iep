import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children }) => {
  const finish = localStorage.getItem("finish");
  if (finish === "true") {
    return <Navigate to="/thanks" />;
  }
  return children;
};
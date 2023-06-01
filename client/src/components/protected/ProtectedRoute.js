import React from "react";
import { useSelector } from "react-redux";
import Login from "../../pages/user/Login";
const ProtectedRoute = ({ children }) => {
  const associateInStore = useSelector((state) => state.associate);
  const employeeInStore = useSelector((state) => state.employee);

  if (
    associateInStore.account.email === null &&
    employeeInStore.account.email === null
  )
    return <Login />;
  return <>{children}</>;
};

export default ProtectedRoute;

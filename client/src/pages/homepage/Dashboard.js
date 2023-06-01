import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logOutAssociate } from "../../redux/reducers/associateSlice";
import Navbar from "../../components/navbar/Navbar";

const Dashboard = () => {
  const associate = useSelector((state) => state.associate);
  const dispatch = useDispatch();
  return (
    <>
      <Navbar />
      <div>Dashboard of: {associate.account.email}</div>
      <button type="button" onClick={() => dispatch(logOutAssociate())}>
        Log out
      </button>
    </>
  );
};

export default Dashboard;

import React from "react";



import AppBarr from "../comp/Appbar/Appbar";
import { Outlet } from "react-router-dom";


const Root = () => {
  return (
    <div >
      <AppBarr />
      <Outlet />
    </div>
  );
};

export default Root;

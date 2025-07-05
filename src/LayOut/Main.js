import React from "react";
import NavigationBar from "../components/NavigationBar/NavigationBar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";

const Main = () => {
  return (
    <div>
      <NavigationBar />
      <Outlet />
      {/* <Footer /> */}
    </div>
  );
};

export default Main;

import React from "react";
import Navbar from "../component/global/Navbar";
import Footer from "../component/global/Footer";

const Main = (props) => {
  return (
    <div>
      <Navbar />
      {props.children}
      <Footer />
    </div>
  );
};

export default Main;

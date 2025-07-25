import React from "react";

const Container = ({ children, className }) => {
  return <div className={`w-10/12 mx-auto ${className}`}>{children}</div>;
};

export default Container;

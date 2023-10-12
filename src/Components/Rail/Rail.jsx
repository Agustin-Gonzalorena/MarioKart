import React from "react";
import "./Rail.css";

const Rail = ({ children }) => {
  return (
    <>
      {children}
      <div className="road-container">
        <div className="road"></div>
      </div>
    </>
  );
};

export default Rail;

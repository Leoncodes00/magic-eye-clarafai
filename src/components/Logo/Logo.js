import React from "react";
import Tilt from "react-tilt";
import logo from "./london-eye.png";
import "./Logo.css";

const Logo = () => {
  return (
    <div className="ma4 mt0">
      <Tilt
        className="Tilt br2"
        options={{ max: 55 }}
        style={{ height: 100, width: 150 }}
      >
        <div className="Tilt-inner">
          <img
            className="icon"
            style={{ paddingTop: "1px" }}
            alt="logo"
            src={logo}
          />
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;

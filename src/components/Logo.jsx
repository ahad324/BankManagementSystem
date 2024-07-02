import React from "react";
import logo from "/Logo.png";

const Logo = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <img src={logo} alt="Logo" className="max-w-full h-auto" />
    </div>
  );
};

export default Logo;

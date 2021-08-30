import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <>
      <h1 onClick={() => window.scroll(0, 0)} className="header">
        nethub
      </h1>
    </>
  );
};

export default Header;

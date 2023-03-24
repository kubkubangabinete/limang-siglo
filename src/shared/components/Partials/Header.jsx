import React, { useState } from "react";
import HeaderHome from "./HeaderHome";
import HeaderChapters from "./HeaderChapters";
import RotateDevice from "./RotateDevice";
import HeaderRightHeader from "./HeaderRightHeader";


const Header = () => {

  return (
    <div>
      <div className="nav-header">
        <HeaderHome />
        <HeaderRightHeader />
      </div>
      <HeaderChapters />
      <RotateDevice />
    </div>
  );
};

export default Header;

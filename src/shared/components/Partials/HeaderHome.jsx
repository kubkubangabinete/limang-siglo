import { Link } from "react-router-dom";
import React, { useState } from "react";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";

const HeaderHome = () => {
  return (
    <div className="left-header">
      <Link to="/">
        <HomeRoundedIcon className="material-icons home-btn" />
      </Link>
    </div>
  );
};

export default HeaderHome;

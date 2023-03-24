import React, { useState } from "react";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

const HeaderAbout1 = ({ setChecked }) => {
  return (
    <a className="menu-element-iii" onClick={() => setChecked(true)}>
      <label
        htmlFor="about-navi-checkbox-toggle"
        className="about-nav-btn"
      >
        <InfoOutlinedIcon className="material-icons about-btn" />
      </label>
    </a>
  );
};

export default HeaderAbout1;

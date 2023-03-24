//HeaderHamButton

import React from "react";
import MenuIcon from "@mui/icons-material/Menu";

const HeaderHamButton = ({ checked, setChecked }) => {
  return (
    <>
      <input
        type="checkbox"
        id="checkbox_toggle"
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />
      <label htmlFor="checkbox_toggle" className="ham">
        <MenuIcon className="material-icons ham-btn" />
      </label>
    </>
  );
};

export default HeaderHamButton;

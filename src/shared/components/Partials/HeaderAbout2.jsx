import React from "react";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import AboutOrg from "./AboutOrg";
import About5Siglo from "./About5Siglo";
import AboutCallToAction from "./AboutCallToAction";
import AboutFeedback from "./AboutFeedback";

const HeaderAbout2 = ({ setChecked }) => {
  return (
    <div className="about-nav">
      <input type="checkbox" id="about-navi-checkbox-toggle" />

      <label
        htmlFor="about-navi-checkbox-toggle"
        className="about-nav-btn-alt"
        onClick={() => setChecked((c) => !c)}
      >
        <InfoOutlinedIcon className="material-icons about-btn-alt" />
      </label>

      <div className="about-nav-bg">&nbsp;</div>

      <div className="about-nav-list about-scroller">
        <About5Siglo />
        <AboutOrg />
        <AboutCallToAction />
        <AboutFeedback />
      </div>
    </div>
  );
};

export default HeaderAbout2;
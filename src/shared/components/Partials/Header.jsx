import { Link } from "react-router-dom";
import React, { useState } from "react";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import ImportContactsOutlinedIcon from "@mui/icons-material/ImportContactsOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import AudioButton from "./AudioButton";
import rotateDeviceIcon from "../../../assets/rotate-device.svg";
import TabsContent from "./TabsContent";
import umaLogo from "../../../assets/umaLogo.svg";
import ChaptersContainer from "./ChaptersContainer";

const Header = () => {
  const [checked, setChecked] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="nav-header">
        {/* Home Button */}
        <div className="left-header">
          <Link to="/">
            <HomeRoundedIcon className="material-icons home-btn" />
          </Link>
        </div>
        {/* Hamburger Button */}
        <div className="right-header">
          <input
            type="checkbox"
            id="checkbox_toggle"
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
          />
          <label htmlFor="checkbox_toggle" className="ham">
            <MenuIcon className="material-icons ham-btn" />
          </label>
          {/* Menu */}
          <div className="menu">
            {/* Notebook Button */}

            <a className="menu-element-i">
              <label htmlFor="ntbk-checkbox-toggle" className="ntbk-btn">
                <ImportContactsOutlinedIcon className="material-icons ntbk-icon" />
              </label>
            </a>

            {/* Audio Button */}
            <a className="menu-element-ii">
              <AudioButton />
            </a>

            {/* About Button */}
            <a className="menu-element-iii" onClick={() => setHidden(true)}>
              <label
                htmlFor="about-navi-checkbox-toggle"
                className="about-nav-btn"
              >
                <InfoOutlinedIcon className="material-icons about-btn" />
              </label>
            </a>
          </div>{" "}
          {/* menu*/}
        </div>{" "}
        {/* right-header*/}
      </div>{" "}
      {/* nav-header*/}
      {/* Footer 1 (Chapters Directory) */}
      <div className="footer">
        <div>
          <button className="chapters-btn" onClick={() => setIsOpen(true)}>
            Chapters
          </button>
          <ChaptersContainer open={isOpen} onClose={() => setIsOpen(false)} />
        </div>
      </div>
      {/*} <ChapterIPage open={open}/>*/}
      {/* About Button 2 */}
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

        <p className="about-nav-list about-scroller">
          <div className="about-website">
            <h1 className="header-title">about 5Siglo</h1>
            <p>
              5Siglo, pronounced as Limang Siglo, is an interactive web primer
              primarily focused on the conditions of the Filipino peasantry
              before and throughout the 500 years of colonialism and resistance
              in the Philippines.
            </p>
            <p>
              Interesting in learning more about the peasantry? Go check out our
              animated explainer video below!
            </p>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/BEXl_EdQk1Y?"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; modestbranding"
              allowfullscreen
            ></iframe>
          </div>

          <div className="about-org">
            <div className="uma-logo-container">
              <img src={umaLogo} className="uma-logo" />
            </div>
            <div>
              <h1 className="header-title">the organization</h1>
              <p>
                Unyon ng Manggagawa sa Agrikultura &#40;UMA&#41; or National
                Federation of Agricultural Workers is the national progressive
                center of unions, federations, and organizations of agricultural
                workers in the Philippines.
              </p>
              <p>
                UMA is a member of the Asian Peasant Coalition &#40;APC&#41; and
                the International League of Peoples’ Struggles &#40;ILPS&#41;.
              </p>
            </div>
          </div>

          <div className="about-cta">
            <h1 className="header-title">call to action</h1>
            <p>
              In little ways, we can support the Filipino peasant movement's
              struggle for national freedom and democracy. In the celebration of
              the Peasant Month this October, we can stand with them in their
              struggle for land, food, and justice, through amplifying their
              voices.
            </p>

            <p>
              Join us in honoring them through submitting any peasant-related
              artworks — illustrations, songs, videos, writings, among many
              other ones, carrying these calls:
            </p>

            <p className="highlighted-text">
              #LandToTheTillers #StandWithFarmers
            </p>
          </div>
        </p>
      </div>{" "}
      {/* about-nav*/}
      {/* Rotate Device */}
      <div className="rotate-device-overlay">
        <div className="rotate-device-container">
          <img src={rotateDeviceIcon} className="rotate-device-icon" />
          <p className="rotate-device-text">
            Rotate device for better experience
          </p>
        </div>
      </div>
      {/* Notebook (for opening the notebook) */}
      <input
        type="checkbox"
        id="ntbk-checkbox-toggle"
        className="ntbk-checkbox"
      />
      <div className="ntbk-overlay">
        <label
          htmlFor="ntbk-checkbox-toggle"
          className="ntbk-overlay-close"
        ></label>
      </div>
      <TabsContent />
    </div>
  );
};

export default Header;

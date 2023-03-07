import { motion } from "framer-motion";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import farmvid from "../../assets/vids/Chapter-1.webm";
import Ch1D1 from "../../shared/components/Partials/Ch1Dialogue1";
import Ch1D2 from "../../shared/components/Partials/Ch1Dialogue2";
import Ch1D3 from "../../shared/components/Partials/Ch1Dialogue3";
import HeadWoman1 from "../../assets/Head_Woman-1.png";
import HeadMan1 from "../../assets/Head_Man-1.png";
import HeadMan2 from "../../assets/Head_Man-2.png";
import Ch1Info from "../../shared/components/Partials/Ch1Info";

const ChapterIPage = () => {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const modelRef = React.useRef();
  return (
    <div className="farm-vid-container">
      <video autoPlay="true"
  loop="true"
  muted="true"
  playsInline="true" id="farmvid">
        <source src={farmvid} type="video/mp4"/>
      </video>

      <div className="prec-1 chii-z">
        <h1 className="page-header-title">
          chapter1
          <sup>
            <button className="about-ch" onClick={() => setIsOpen(true)}>
              ?
            </button>
          </sup>
        </h1>
        <Ch1Info open={isOpen} onClose={() => setIsOpen(false)} />
      </div>

      <div className="farm-heads-container">
        <button className="farm-head-icon" onClick={() => setIsOpen1(true)}>
          <img className="farm-head-img" src={HeadWoman1} />
        </button>

        <button className="farm-head-icon" onClick={() => setIsOpen2(true)}>
          <img className="farm-head-img" src={HeadMan2} />
        </button>

        <button className="farm-head-icon" onClick={() => setIsOpen3(true)}>
          <img className="farm-head-img" src={HeadMan1} />
        </button>

        <Ch1D1 open={isOpen1} onClose={() => setIsOpen1(false)} />
        <Ch1D2 open={isOpen2} onClose={() => setIsOpen2(false)} />
        <Ch1D3 open={isOpen3} onClose={() => setIsOpen3(false)} />
      </div>
    </div>
  );
};

export default ChapterIPage;

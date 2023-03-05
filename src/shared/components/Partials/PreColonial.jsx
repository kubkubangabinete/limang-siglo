import React, { useState } from "react";
import samplePres from "../../../assets/chii-sample-pres.png";
import { Link } from "react-router-dom";
import Ch2Info from "./Ch2Info";

const PreColonial = () => {
  const [checked, setChecked] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const modelRef = React.useRef();
  return (
    <div className="dev-carousel ">
      <div className="prec-1">
        <h1 className="page-header-title">chapter2
        <sup>
                <button className="about-ch" onClick={() => setIsOpen(true)}>
                  ?
                </button>
              </sup></h1>
        <p className="page-header-subtitle">pre-colonial</p>
        <Ch2Info open={isOpen} onClose={() => setIsOpen(false)} />
      </div>

      <div
        className="dev-slides-item dev-slide-1"
        id="dev-slide-1"
        aria-label="slide 1 of 2"
        tabIndex="0"
      >
        <div className="rice-terraces-container">
          <model-viewer
            className="model-viewer"
            src="../../../../public/rice-terraces.glb"
            loading="eager"
            style={{
              width: "30vw",
              height: "30vw",
              padding: "0",
              margin: "0",
              borderRadius: "50%",
              border: "1.5vh solid lightyellow",
              background:
                "linear-gradient(#f1ede6 10%,rgba(220, 208, 181)100%)",
              top: "0",
              hover: {
                boxShadow: "0px 0px 100px 100px red",
              },
            }}
            auto-rotate
            camera-controls
            ar
            exposure="2"
            shadow-softness="1"
            environment-image="../../../../public/pillars_1k.hdr"
            ar-modes="webxr"
            ref={(ref) => {
              modelRef.current = ref;
            }}
          >
          </model-viewer>

          
          <div className="rice-card-modal-container">
            <div className="rice-card-modal-p-container">
              <h2 className="rice-card-modal-h3">
                Pre-Colonial Agricultural Developments
              </h2>
              <p className="rice-card-modal-p">
                Before we were colonized by the Spaniards, although the social
                systems were not perfect, not free from peasant oppression and
                slavery — land, at least in many parts of Luzon, was shared by
                everyone and was tilled for the whole community.
              </p>
              <p className="rice-card-modal-p">
                One well-known development is that there was already a
                prosperous irrigation system for their fields at that time. The
                famous rice terraces are worth mentioning, a product of the
                engineering genius of the early Ifugaos.
              </p>
              <p className="rice-card-modal-p">
                More so, pre-colonial Philippines had a great deal of
                achievements: livestock-raising, fishing, brewing, mining,
                lumbering, weapons and cannons, gunpowder, weaving,
                shipbuilding, and ornaments.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Pagination */}
      <div className="dev-carousel__nav">
        <Link
          to="/chapters-directory/chapter-2/pre-colonial"
          className="dev-slider-nav"
        >
          1
        </Link>

        <Link
          to="/chapters-directory/chapter-2/pre-colonial/2"
          className="dev-slider-nav"
        >
          2
        </Link>
      </div>

      <Link to="/chapters-directory/chapter-2">
        <div className="chapter-two-btn chapter-two-btn-container">
          <button className="chapter-two-links back-btn">Back</button>
        </div>
      </Link>
    </div>
  );
};

export default PreColonial;

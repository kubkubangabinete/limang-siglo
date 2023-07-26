import React, { useState } from "react";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import RiceTerraces from "./RiceTerraces";
import Ch2Info from "./Ch2Info";

const PreColonial1 = () => {
  const modelRef = React.useRef();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="prec-1">
        <h1 className="page-header-title">
          chapter2
          <sup>
            <button className="about-ch" onClick={() => setIsOpen(true)}>
              ?
            </button>
          </sup>
        </h1>
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
          <Canvas
            className="model-viewer"
            style={{
              width: "30vw",
              height: "30vw",
              padding: "0",
              margin: "0",
              borderRadius: "50%",
              border: "1.5vh solid lightyellow",
              top: "0",
              background:
                "linear-gradient(#f1ede6 10%,rgba(220, 208, 181)100%)",
              hover: {
                boxShadow: "0px 0px 100px 100px red",
              },
            }}
          >
            <Suspense fallback={null}>
              <RiceTerraces />
              <Environment background={false} files="/pillars_1k.hdr" />
            </Suspense>
            <OrbitControls />
          </Canvas>

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
    </div>
  );
};

export default PreColonial1;

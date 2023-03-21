import React, { useState } from "react";
import homepage from "/homepage.webm";
import weblogo from "../assets/web-logo.png";
import Ch1Info from "../shared/components/Partials/Ch1Info";
import DraggableSlider from "./DraggableSlider";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div className="farm-vid-container">
        <video
          muted
          autoPlay
          src={homepage}
          loop
          playsInline
          webkit-playsinline
          preload
        />

        <div className="weblogo-container">
          <img src={weblogo} className="weblogo-image" />
          <div className="homepage-subtitle">
            <p>A Filipino Peasant Primer</p>
          </div>

          {/* Drag Controller */}
          {/* <DraggableSlider /> */}

          {/* Start Button (alt to Drag Controller) */}
          <Link to="/chapters-directory/chapter-1" style={{ color: "white" }}>
              <div className="home-start-btn-container">
                <button className="homepage-start-btn">Start</button>
                </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

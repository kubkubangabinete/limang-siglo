import React, { useState } from "react";
import homepage from "../assets/vids/homepage.webm";
import weblogo from "../assets/web-logo.png";
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
                <button className="homepage-start-btn">Start</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

//Home.jsx

import React, { useState } from "react";
import homepage from "/homepage.webm";
import weblogo from "../assets/web-logo.png";
import DraggableSlider from "./DraggableSlider";
import { Link } from "react-router-dom";
import Header from "../shared/components/Partials/Header";
import HomeDialogue from "../shared/components/Partials/HomeDialogue";
import { useTour } from '@reactour/tour'

const HomePage = () => {
  const { setIsOpen } = useTour()
  const [isOpen1, setIsOpen1] = useState(false);
  const [toggleMusic, setToggleMusic] = useState(false);

  
  const handleToggleMusic = () => {
    setToggleMusic(!toggleMusic);
  };
  
  
  return (
    <div>
      <Header />
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
          <div className="homepage-btns">
            <Link to="/chapters-directory/chapter-1" style={{ color: "white" }}>
                <button className="homepage-start-btn">Start</button>
            </Link>
            <button
              className="homepage-start-btn homepage-guide-btn"
              onClick={() => {
                setIsOpen1(true);
              }}
            >
              Guide
            </button>
          </div>
        </div>
      </div>

      <HomeDialogue
        open={isOpen1}
        onClose={() => setIsOpen1(false)}
        startTour={() => {
          setIsOpen(true);
          setIsOpen1(false);
          setCurrentStep(0);
        }}
      />
      
    </div>
  );
};

export default HomePage;

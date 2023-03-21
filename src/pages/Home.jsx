import React, { useState, useEffect } from "react";
import weblogo from "../assets/web-logo.png";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [imageIndex, setImageIndex] = useState(1);
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      setImageIndex(index => (index % 250) + 1);
    }, 100);
    
    return () => clearInterval(intervalId);
  }, []);
  
  const imageUrl = `./public/plantPics/${imageIndex.toString().padStart(4, '0')}.webp`;

  return (
    <div>
      <div className="plant-vid-container">
        <img src={imageUrl} alt="farm" />
      </div>

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
  );
};

export default HomePage;

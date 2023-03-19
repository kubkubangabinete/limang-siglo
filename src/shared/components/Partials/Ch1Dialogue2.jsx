import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import KeyboardDoubleArrowRightRoundedIcon from "@mui/icons-material/KeyboardDoubleArrowRightRounded";
import CloseIcon from '@mui/icons-material/Close';
import HalfMan2 from "../../../assets/Half_Man-2.png";

const ChaptersContainerStyles = {
  position: "fixed",
  overflow: "hidden",
  display: "flex",
  top: "50%",
  left: "50%",
  zIndex: 1000,
};

const ChaptersOverlayStyles = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, .3)",
  backdropFilter: "blur(2px)",
  zIndex: 1000,
};

export default function Ch1D1({ open, onClose }) {
  const [currentLine, setCurrentLine] = useState(0);

  const dialogue = [
    "Hello, I was just fishing a while ago.",
    "Yes, I am a fisherman but I also farm. Do you know peasants can earn from various livelihoods?",
    "Some raise animals. Some are carpenters. Some may also do handicraft work like that lady over there.",
    "Nevertheless, we're still peasants. Landless farmers who have a common dream of having a land of our own."
  ];

  useEffect(() => {
    if (!open) {
      setCurrentLine(0);
    }
  }, [open]);

  const handleNextClick = () => {
    if (currentLine < dialogue.length - 1) {
      setCurrentLine(currentLine + 1);
    } else {
      onClose();
    }
  };

  // ...
  return (
    open &&
    ReactDOM.createPortal(
      <>
        <div onClick={onClose} />
        <div style={ChaptersOverlayStyles} onClick={onClose} />
        <div style={ChaptersContainerStyles}>
          <div className="dialogue-half-char-container">
            <img
              src={HalfMan2}
              className="dialogue-half-char"
              alt="Character"
            />
          </div>
          <div className="dialogue-modal-container">
            <div className="dialogue-modal-text">
              <h2 className="dialogue-modal-h2">Peasant Fisherman</h2>
              <div className="dialogue-modal-p">
                <p>{dialogue[currentLine]}</p>
              </div>
            </div>
            <div className="dialogue-modal-buttons-container">
              {currentLine < dialogue.length - 1 ? (
                <div className="dialogue-modal-buttons-subcontainer">
                <div className="dialogue-modal-next-container">
                  <button className="dialogue-modal-next-button" onClick={handleNextClick}>
                    
                    <span>Next</span>
                  
                  <svg className="arrow-right-svg" viewBox="0 0 24 24">
                    <KeyboardDoubleArrowRightRoundedIcon />
                  </svg>
                  </button>
                </div>
              </div>
              
              ) : (
                <div className="dialogue-modal-buttons-subcontainer">
                  <div className="dialogue-modal-next-container">
                  <button className="dialogue-modal-close-button" onClick={onClose}>
                    
                    <span>Close</span>
                  
                  <svg className="close-svg" viewBox="0 0 24 24">
                    <CloseIcon />
                  </svg>
                  </button>
                </div>

                </div>
              )}
            </div>
          </div>
        </div>
      </>,
      document.getElementById("portal")
    )
  );
}

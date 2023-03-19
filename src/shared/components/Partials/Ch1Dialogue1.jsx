import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import KeyboardDoubleArrowRightRoundedIcon from "@mui/icons-material/KeyboardDoubleArrowRightRounded";
import CloseIcon from '@mui/icons-material/Close';
import HalfWoman1 from "../../../assets/Half_Woman-1.png";

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
    "Oh, hi there. I didn't notice you.",
    "Peasants, you say?",
    "Peasants are basically farmers who are tied to a feudal bondage. Feudal, as in landlord versus peasant. The land we till is not ours.",
    "Land is really important to us, especially when it's what we get our food and livelihood from.",
    "I hope that helped a bit. You can ask the other two if you want to know more, okay?",
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
              src={HalfWoman1}
              className="dialogue-half-char"
              alt="Character"
            />
          </div>
          <div className="dialogue-modal-container">
            <div className="dialogue-modal-text">
              <h2 className="dialogue-modal-h2">Peasant Indigenous Woman</h2>
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

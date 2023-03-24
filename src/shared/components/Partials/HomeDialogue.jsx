// HomeDialogue.jsx

import React, { useState } from "react";
import ReactDOM from "react-dom";

const ChaptersContainerStyles = {
  position: "fixed",
  overflow: "hidden",
  display: "flex",
  top: "50%",
  left: "50%",

  zIndex: 1000000,
};

const ChaptersOverlayStyles = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, .3)",
  backdropFilter: "blur(5px)",
  zIndex: 1000000,
};

export default function HomeDialogue({ open, onClose, startTour }) {
  if (!open) return null;

  const handleClick = () => {
    startTour();
    onClose();
  };

  return ReactDOM.createPortal(
    <div>
      <div onClick={onClose} />
      <div style={ChaptersOverlayStyles} onClick={onClose} className="terms-overlay"/>
      <div style={ChaptersContainerStyles}>
        <div className="terms-privacy-modal-container">
          <div className="terms-privacy-modal-text">
            <h3 className="terms-privacy-h3">Kamusta po tayo? 🌾</h3>
            <p className="terms-privacy-p">
              Welcome to 5Siglo, a 3D interactive website and a multimedia primer on the Filipino peasantry. We're excited to have you here! Our website is designed to provide you with an engaging and informative experience as you explore the struggles and challenges faced by the Filipino peasantry.
            </p>
            <p className="terms-privacy-p">
              To help you get started, we'd like to introduce you to some of the key features of our homepage.
            </p>
            <button className="get-started" onClick={handleClick}>Click to get started</button>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("portal")
  );
}

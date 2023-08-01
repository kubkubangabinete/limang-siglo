import React, { useState } from "react";
import sampleSpanish from "../../../assets/chii-sample-america.jpeg";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom";

const ChaptersContainerStyles = {
  position: "fixed",
  overflow: "hidden",
  display: "flex",
  top: '50%',
  left: '50%',
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

export default function Ch3Info({ open, onClose }) {
  if (!open) return null;

  return ReactDOM.createPortal(
    <>
      <div onClick={onClose} />
      <div style={ChaptersOverlayStyles} onClick={onClose} />
      <div style={ChaptersContainerStyles}>
        <div className="sol-modal-container">
            <div className="sol-modal-text">
              <h2 className="sol-modal-h2">
                Chapter 3
              </h2>
              <h3 className="sol-modal-h3">
              Plight of the Peasantry
              </h3>
              <p className="sol-modal-p">
                Chapter 3 contains a short list of the many ways
                the Filipino peasantry is being disenfranchised. These challenges perpetuate a cycle of poverty, making it difficult for the peasantry to assert their rights to land ownership and improve their livelihoods.
            </p>
            <p className="sol-modal-p">
                <i>
                  To know more, open the Chapter Guide found at the top-right
                  of your screen. 
                </i>
                </p>
            </div>
          </div>
      </div>
    </>,
    document.getElementById("portal")
  );
}

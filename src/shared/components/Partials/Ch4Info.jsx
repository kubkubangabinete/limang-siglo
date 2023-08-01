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

export default function Ch4Info({ open, onClose }) {
  if (!open) return null;

  return ReactDOM.createPortal(
    <>
      <div onClick={onClose} />
      <div style={ChaptersOverlayStyles} onClick={onClose} />
      <div style={ChaptersContainerStyles}>
        <div className="sol-modal-container">
            <div className="sol-modal-text">
              <h2 className="sol-modal-h2">
                Chapter 4
              </h2>
              <h3 className="sol-modal-h3">
              Roots of the Problems
              </h3>
              <p className="sol-modal-p">
              Imperialism, feudalism, and bureaucrat-capitalism have all had significant impacts on the material conditions of the Filipino peasantry. These issues have led to an unequal distribution of wealth and power, leaving the Filipino peasantry to face the negative consequences. Addressing these issues is essential to promote a fairer and more just society for all.
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

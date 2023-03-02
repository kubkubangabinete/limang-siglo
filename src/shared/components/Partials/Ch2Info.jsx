import React, { useState } from "react";
import sampleSpanish from "/src/assets/chii-sample-america.png";
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

export default function Ch2Info({ open, onClose }) {
  if (!open) return null;

  return ReactDOM.createPortal(
    <>
      <div onClick={onClose} />
      <div style={ChaptersOverlayStyles} onClick={onClose} />
      <div style={ChaptersContainerStyles}>
        <div className="sol-modal-container">
            <div className="sol-modal-text">
              <h2 className="sol-modal-h2">
                Chapter 2
              </h2>
              <h3 className="sol-modal-h3">
              History of the Peasant Struggle
              </h3>
              <p className="sol-modal-p">
                There hasn't been any agrarian reform policies that truly
                aims to answer the demand of Filipino farmers, which are
                free land distribution and social justice. Having said that, 
                the Genuine Agrarian Reform Program (GARB) will implement these two,
                addressing landlessness and rural poverty.
            </p>
            <p className="sol-modal-p">
                With this bill, if passed, it will break up the monopoly 
                of a few landowners and foreign control of agricultural lands, 
                eliminate all forms of oppression and exploitation in the countryside, 
                and pave the way for social justice.
              </p>
            </div>
          </div>
      </div>
    </>,
    document.getElementById("portal")
  );
}

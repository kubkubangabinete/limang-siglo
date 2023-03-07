import React, { useState } from "react";
import sampleSpanish from "../../../assets/chii-sample-america.png";
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

export default function Ch1Info({ open, onClose }) {
  if (!open) return null;

  return ReactDOM.createPortal(
    <>
      <div onClick={onClose} />
      <div style={ChaptersOverlayStyles} onClick={onClose} />
      <div style={ChaptersContainerStyles}>
        <div className="sol-modal-container">
            <div className="sol-modal-text">
              <h2 className="sol-modal-h2">
                Chapter 1
              </h2>
              <h3 className="sol-modal-h3">
              Introduction
              </h3>
              <p className="sol-modal-p">
                Have you met any peasants here in the Philippines?
                </p>
                <p className="sol-modal-p">
                This chapter helps us answer and reflect on 
                questions that commonly confuse some people
                -- Who are the peasants exactly? Where are they situated?
                What makes a peasant... a peasant?
                </p>
                <p className="sol-modal-p">
                <i>
                  To know more, open the Chapter Guide found on the top-right
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

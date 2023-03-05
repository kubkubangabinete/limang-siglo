import React, { useState } from "react";
import sampleSpanish from "../../../assets/chii-sample-america.png";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom";
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
  if (!open) return null;

  return ReactDOM.createPortal(
    <>
      <div onClick={onClose} />
      <div style={ChaptersOverlayStyles} onClick={onClose} />
      <div style={ChaptersContainerStyles}>
        
        <div className="dialogue-half-char-container">
          <img src={HalfWoman1} className="dialogue-half-char" />
        </div>

        <div className="dialogue-modal-container">
          
          <div className="dialogue-modal-text">
            <h2 className="dialogue-modal-h2">Peasant Indigenous Woman</h2>
            <div className="dialogue-modal-p">
              <p>Oh, hi there. I didn't notice you.</p>
              <p>Peasants, you say?</p>
              <p>
                Peasants are basically farmers who are tied to a <i>feudal</i>{" "}
                bondage. Feudal, as in landlord versus peasant. The land we till
                is not ours.
              </p>
              <p>
                Land is really important to us, especially when it's what we get
                our food and livelihood from.
              </p>
              <p>
                I hope that helped a bit. You can ask the other two if you want
                to know more, okay?
              </p>
            </div>
          </div>
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
}

// {/* Part 1: Woman */}
// <div className="farm-dialogue-container-1">
// <div className="farm-dialogue-image-1">
//   <img></img>
// </div>

// <div className="farm-dialogue-1">
//   <p>Oh, hi there. I didn't notice you.</p>
// </div>
// <div className="farm-dialogue-2">
//   <p>Peasants, you say?</p>
// </div>
// <div className="farm-dialogue-3">
//   <p>Peasants are basically farmers who are
//     tied to a <i>feudal</i> bondage. Feudal, as
//     in landlord versus peasant. The land
//     we till is not ours.
//   </p>
// </div>
// <div className="farm-dialogue-4">
//   <p>Land is really important to us,
//     especially when it's what we get
//     our food and livelihood from.
//   </p>
// </div>
// <div className="farm-dialogue-5">
//   <p>I hope that helped a bit.
//     You can ask the other two if you
//     want to know more, okay?
//   </p>
// </div>

// </div>

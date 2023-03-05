import React, { useState } from "react";
import sampleSpanish from "../../../assets/chii-sample-america.png";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom";
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

export default function Ch1D2({ open, onClose }) {
  if (!open) return null;

  return ReactDOM.createPortal(
    <>
      <div onClick={onClose} />
      <div style={ChaptersOverlayStyles} onClick={onClose} />
      <div style={ChaptersContainerStyles}>
      <div className="dialogue-half-char-container">
          <img src={HalfMan2} className="dialogue-half-char" />
        </div>
        <div className="dialogue-modal-container">
          <div className="dialogue-modal-text">
            <h2 className="dialogue-modal-h2">Peasant Fisherman</h2>
            <div className="dialogue-modal-p">
              <p> Hello, I was just fishing a while ago.</p>
              <p> Yes, I am a fisherman but I also farm. Do you know peasants can earn
                  from various livelihoods?</p>
              <p>
                  Some raise animals. Some are carpenters. Some may also do handicraft
                  work like that lady over there.
              </p>
              <p>
                  Nevertheless, we're still peasants. Landless farmers who have a
                  common dream of having a land of our own.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
}

{
  /* Part 2: Man 1 (green shirt)
<div className="farm-dialogue-container-2">
<div className="farm-dialogue-image-2">
  <img></img>
</div>

<div className="farm-dialogue-6">
  <p>Hello, I was just fishing a while ago.</p>
</div>
<div className="farm-dialogue-7">
  <p>
    Yes, I am a fisherman but I also farm. Do you know peasants can earn
    from various livelihoods?
  </p>
</div>
<div className="farm-dialogue-8">
  <p>
    Some raise animals. Some are carpenters. Some may also do handicraft
    work like that lady over there.
  </p>
</div>
<div className="farm-dialogue-9">
  <p>
    Nevertheless, we're still peasants. Landless farmers who have a
    common dream of having a land of our own.
  </p>
</div>
</div> */
}

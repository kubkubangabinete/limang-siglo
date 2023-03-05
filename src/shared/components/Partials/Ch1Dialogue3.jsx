import React, { useState } from "react";
import sampleSpanish from "../../../assets/chii-sample-america.png";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom";
import HalfMan1 from "../../../assets/Half_Man-1.png";

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

export default function Ch1D3({ open, onClose }) {
  if (!open) return null;

  return ReactDOM.createPortal(
    <>
      <div onClick={onClose} />
      <div style={ChaptersOverlayStyles} onClick={onClose} />
      <div style={ChaptersContainerStyles}>
      <div className="dialogue-half-char-container char3">
          <img src={HalfMan1} className="dialogue-half-char" />
        </div>
        <div className="dialogue-modal-container">
          <div className="dialogue-modal-text">
            <h2 className="dialogue-modal-h2">Peasant Man</h2>
            <div className="dialogue-modal-p">
              <p>Hey, need something?</p>
              <p>Sure, I think can share a thing or two.</p>
              <p>
                In the countryside or rural areas, peasants can be rich, middle,
                or poor.
              </p>
              <p>
                Of course, they are exactly alike to those in urban areas. The
                urban rich is different from the rural rich.
              </p>
              <p>
                Rich, middle, or poor peasant — they are still peasants after
                all, oppressed and exploited by powerful forces.
              </p>
              <p>Big landlords, corporations, and bureaucrats.</p>
              <p>That's pretty much it. Thanks for dropping by.</p>
            </div>
          </div>
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
}

{
  /* Part 3: Man 2 (big hat) 
<div className="farm-dialogue-container-3">
<div className="farm-dialogue-image-3">
  <img></img>
</div>

<div className="farm-dialogue-10">
  <p>Hey, need something?</p>
</div>
<div className="farm-dialogue-11">
  <p>Sure, I think can share a thing or two.</p>
</div>
<div className="farm-dialogue-12">
  <p>
    In the countryside or rural areas, peasants can be rich, middle, or
    poor.
  </p>
</div>
<div className="farm-dialogue-13">
  <p>
    Of course, they are exactly alike to those in urban areas. The urban
    rich is different from the rural rich.
  </p>
</div>
<div className="farm-dialogue-14">
  <p>
    Rich, middle, or poor peasant — they are still peasants after all,
    oppressed and exploited by powerful forces.
  </p>
</div>
<div className="farm-dialogue-15">
  <p>Big landlords, corporations, and bureaucrats.</p>
</div>
<div className="farm-dialogue-16">
  <p>That's pretty much it. Thanks for dropping by.</p>
</div>
</div>*/
}

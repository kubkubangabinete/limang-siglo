import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import Ch2Info from "./Ch2Info";

const Chapter2Nav = ({
  onShowPreColonial,
  onShowSpanish,
  onShowAmerican,
  onShowPhilippines,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="chapter-two-nav">
      <div className="chii-text-wrapper">
        <h1 className="page-header-title chii-text-wrapper">
          chapter2
          <sup>
            <button className="about-ch" onClick={() => setIsOpen(true)}>
              ?
            </button>
          </sup>
        </h1>
        <Ch2Info open={isOpen} onClose={() => setIsOpen(false)} />
      </div>

      <div className="chapter-two-btn">
        <button
          className="chapter-two-links"
          onClick={() => onShowPreColonial(true)}
        >
          Pre-Colonial Period
        </button>
      </div>

      <div className="chapter-two-btn">
        <button
          className="chapter-two-links"
          onClick={() => onShowSpanish(true)}
        >
          Spanish Colonization Period
        </button>
      </div>

      <div className="chapter-two-btn">
        <button
          className="chapter-two-links"
          onClick={() => onShowAmerican(true)}
        >
          American Colonization Period
        </button>
      </div>

      <div className="chapter-two-btn">
        <button
          className="chapter-two-links"
          onClick={() => onShowPhilippines(true)}
        >
          Present Philippine Republic
        </button>
      </div>
    </div>
  );
};

export default Chapter2Nav;

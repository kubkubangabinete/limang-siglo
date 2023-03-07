import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import Ch2Info from "../../shared/components/Partials/Ch2Info";

const ChapterIIPage = () => {
  const [checked, setChecked] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const modelRef = React.useRef();
  return (
    <div>
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
          <Link
            to="/chapters-directory/chapter-2/pre-colonial"
            style={{ color: "white" }}
          >
            <button className="chapter-two-links">Pre-Colonial Period</button>
          </Link>
        </div>
        <div className="chapter-two-btn">
          <Link
            to="/chapters-directory/chapter-2/spanish"
            style={{ color: "white" }}
          >
            <button className="chapter-two-links">
              Spanish Colonization Period
            </button>
          </Link>
        </div>
        <div className="chapter-two-btn">
          <Link
            to="/chapters-directory/chapter-2/american"
            style={{ color: "white" }}
          >
            <button className="chapter-two-links">
              American Colonization Period
            </button>
          </Link>
        </div>
        <div className="chapter-two-btn">
          <Link
            to="/chapters-directory/chapter-2/philippines"
            style={{ color: "white" }}
          >
            <button className="chapter-two-links">
              Present Philippine Republic
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ChapterIIPage;

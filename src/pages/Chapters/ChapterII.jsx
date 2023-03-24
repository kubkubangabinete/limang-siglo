import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import Ch2Info from "../../shared/components/Partials/Ch2Info";
import Header from "../../shared/components/Partials/Header";
import PreColonial from "../../shared/components/Partials/PreColonial";
import Spanish from "../../shared/components/Partials/SpGallery";
import American from "../../shared/components/Partials/AmGallery";
import Philippines from "../../shared/components/Partials/PhGallery";
import Chapter2Nav from "../../shared/components/Partials/Ch2Nav";

const ChapterIIPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showPreColonial, setShowPreColonial] = useState(false);
  const [showSpanish, setShowSpanish] = useState(false);
  const [showAmerican, setShowAmerican] = useState(false);
  const [showPhilippines, setShowPhilippines] = useState(false);
  const [showNav, setShowNav] = useState(true);

  const handleBack = () => {
    setShowPreColonial(false);
    setShowSpanish(false);
    setShowAmerican(false);
    setShowPhilippines(false);
    setShowNav(true);
  };

  const handleNavClick = () => {
    setIsOpen(false);
    setShowNav(false);
  };

  return (
    <div className="chapter-container">
      <Header />
      {showNav && (
        <motion.div
          className="chapter2-nav-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1}}
          transition={{ duration: 0.5 }}
        >
          <Chapter2Nav
            onShowPreColonial={() => {
              setShowPreColonial(true);
              handleNavClick();
            }}
            onShowSpanish={() => {
              setShowSpanish(true);
              handleNavClick();
            }}
            onShowAmerican={() => {
              setShowAmerican(true);
              handleNavClick();
            }}
            onShowPhilippines={() => {
              setShowPhilippines(true);
              handleNavClick();
            }}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          />
        </motion.div>
      )}

      {showPreColonial && (
        <PreColonial onClose={() => setShowPreColonial(false)} />
      )}

      {showSpanish && <Spanish onClose={() => setShowSpanish(false)} />}

      {showAmerican && <American onClose={() => setShowAmerican(false)} />}

      {showPhilippines && (
        <Philippines onClose={() => setShowPhilippines(false)} />
      )}

      {(showPreColonial || showSpanish || showAmerican || showPhilippines) && (
        <div className="chapter-two-btn chapter-two-btn-container">
          <button className="chapter-two-links back-btn" onClick={handleBack}>
            Back
          </button>
        </div>
      )}
    </div>
  );
};

export default ChapterIIPage;

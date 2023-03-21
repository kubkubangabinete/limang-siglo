import React, { useState } from "react";
import samplePres from "../../../assets/chii-sample-pres.png"
import { Link } from "react-router-dom";
import Ch2Info from "./Ch2Info";

const PreColonial2 = () => {
  const modelRef = React.useRef();
  const [checked, setChecked] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  return (


<div className="chapter-container"> {/* LABEL + ONCLICK */}

<div className="dev-cards-list">
<div className="page-header-container">
        <h1 className="page-header-title">chapter2
        <sup>
                <button className="about-ch" onClick={() => setIsOpen(true)}>
                  ?
                </button>
              </sup></h1>
        <p className="page-header-subtitle">pre-colonial developments</p>
        <Ch2Info open={isOpen} onClose={() => setIsOpen(false)} />
    </div>
    
    <label htmlFor="dev-card-checkbox-toggle-1" className="dev-1">
        <div className="dev-card-btn">
            <div className="dev-card-image">
                <img className="dev-card-image-img" src="https://media.giphy.com/media/8TRLrcdMbgSDpQctUI/giphy.gif"/>
            </div>
        </div>
    </label>

    <label htmlFor="dev-card-checkbox-toggle-2" className="dev-2">
        <div className="dev-card-btn">
            <div className="dev-card-image">
                <img className="dev-card-image-img" src="https://media.giphy.com/media/FhuMeW4ne1Vi2vhEFS/giphy.gif"/>
            </div>
      
        </div>
    </label>

    <label htmlFor="dev-card-checkbox-toggle-3" className="dev-3">
        <div className="dev-card-btn">
            <div className="dev-card-image">
                <img className="dev-card-image-img" src="https://media.giphy.com/media/InIHR2Xb6TG5sMHcLH/giphy.gif"/>
            </div>
           
        </div>
    </label>

    <label htmlFor="dev-card-checkbox-toggle-4" className="dev-4">
        <div className="dev-card-btn">
            <div className="dev-card-image">
                <img className="dev-card-image-img" src="https://media.giphy.com/media/I5HmyWSIiRpbwzGV9i/giphy.gif"/>
            </div>
        </div>
    </label>

    <label htmlFor="dev-card-checkbox-toggle-5" className="dev-5">
        <div className="dev-card-btn">
            <div className="dev-card-image">
                <img className="dev-card-image-img" src="https://media.giphy.com/media/Zd25ivbSfytMQekkoD/giphy.gif"/>
            </div>
        </div>
    </label>

    <label htmlFor="dev-card-checkbox-toggle-6" className="dev-6">
        <div className="dev-card-btn">
            <div className="dev-card-image">
                <img className="dev-card-image-img" src="https://media.giphy.com/media/rkE1N3QnbYXuLeC3rl/giphy.gif"/>
            </div>
        </div>
    </label>

    <label htmlFor="dev-card-checkbox-toggle-7" className="dev-7">
        <div className="dev-card-btn">
            <div className="dev-card-image">
                <img className="dev-card-image-img" src="https://media.giphy.com/media/uDBZo21lUHM2m8H3Ii/giphy.gif"/>
            </div>
        </div>        
    </label>

    <label htmlFor="dev-card-checkbox-toggle-8" className="dev-8">
        <div className="dev-card-btn">
            <div className="dev-card-image">
                <img className="dev-card-image-img" src="https://media.giphy.com/media/R6YfJusrNT87SkBoDy/giphy.gif"/>
            </div>
        </div>
    </label>

    <label htmlFor="dev-card-checkbox-toggle-9" className="dev-9">
        <div className="dev-card-btn">
            <div className="dev-card-image">
                <img className="dev-card-image-img" src="https://media.giphy.com/media/mw5BNeF0Gwnm58KpLI/giphy.gif"/>
            </div>
        </div>
    </label>

    </div>




      {/* Pagination */}
      <div className="dev-carousel__nav">

        <Link to="/chapters-directory/chapter-2/pre-colonial" className="dev-slider-nav">
          1
        </Link>

        <Link to="/chapters-directory/chapter-2/pre-colonial/2" className="dev-slider-nav"
          >
          2
        </Link>

      </div>

        <Link to="/chapters-directory/chapter-2" style={{ color: 'white' }}>
		    <div className="chapter-two-btn chapter-two-btn-container">
                <button className="chapter-two-links back-btn">Back</button>
		    </div>
        </Link>

    </div>
  );
};

export default PreColonial2

import React, { useState } from "react";
import sampleSpanish from "../../../assets/chii-sample-america.png";
import { Link } from 'react-router-dom'


const Developments = () => {

    const [checked, setChecked] = useState(false);
    return (

<div className="spanish-cards-container"> {/* LABEL + ONCLICK */}


    <div className="spanish-cards-list">
    
    <input type="checkbox" id="spanish-card-checkbox-toggle-1" />
    <input type="checkbox" id="spanish-card-checkbox-toggle-2" />
    <input type="checkbox" id="spanish-card-checkbox-toggle-3" />
    <input type="checkbox" id="spanish-card-checkbox-toggle-4" />

        <label htmlFor="spanish-card-checkbox-toggle-1" className="spanish-1">
            <div className="spanish-card-btn">
                <div className="spanish-card-image">
                    <img className="spanish-card-image-img" src={sampleSpanish}/>
                </div>
                <div className="spanish-card-title">
                    <div className="spanish-card-p">Regalian Doctrine</div>
                </div>
            </div>

            <div className="spanish-card-modal-container">
            <div className="spanish-card-modal">
                <div className="spanish-card-modal-p-container">
                    <h2 className="spanish-card-modal-h3">The Regalian Doctrine: A Colonial Law for Philippine Land Disposession</h2>
                    <p>
                    Through the Regalian Doctrine the conquistadors introduced, all our lands were to be completely owned by the “crown” or the King of Spain.
                    </p>
                </div>
            </div>
            </div>
            
        </label>

        <label htmlFor="spanish-card-checkbox-toggle-2" className="spanish-2">
            <div className="spanish-card-btn">
                <div className="spanish-card-image">
                    <img className="spanish-card-image-img" src={sampleSpanish}/>
                </div>
                <div className="spanish-card-title">
                    <div className="spanish-card-p">Encomienda System</div>
                </div>
            </div>

            <div className="spanish-card-modal-container">
            <div className="spanish-card-modal">
                <div className="spanish-card-modal-p-container">
                    <h2 className="spanish-card-modal-h3">The Encomienda System: Spain's Slave Labor System</h2>
                    <p>
                    This was a system where the Spanish colonial officials and religious orders were granted wide areas of lands as an award for their services in the conquest of the Filipinos, this was called the Encomienda System. They were granted the right to force Filipino peasants to farm the stolen lands to produce the needs of the crown and its other colonies.
                    </p>
                </div>
            </div>
            </div>
            
        </label>

        <label htmlFor="spanish-card-checkbox-toggle-3" className="spanish-3">
            <div className="spanish-card-btn">
                <div className="spanish-card-image">
                    <img className="spanish-card-image-img" src={sampleSpanish}/>
                </div>
                <div className="spanish-card-title">
                    <div className="spanish-card-p">Hacienda System</div>
                </div>
            </div>

            <div className="spanish-card-modal-container">
            <div className="spanish-card-modal">
                <div className="spanish-card-modal-p-container">
                    <h2 className="spanish-card-modal-h3">The Hacienda System: Philippine Natural Resources for Foreign Consumption</h2>
                    <p>
                    After some time, the encomienda system evolved into the hacienda system. Compared to the former, this system was geared to produce superprofits by expanding the possessed lands into plantations or “haciendas.” Here, crops and raw materials are produced for export, consumption, and demand of Spanish and other European countries.
                    </p>
                </div>
            </div>
            </div>
            
        </label>

        <label htmlFor="spanish-card-checkbox-toggle-4" className="spanish-4">
            <div className="spanish-card-btn">
                <div className="spanish-card-image">
                    <img className="spanish-card-image-img" src={sampleSpanish}/>
                </div>
                <div className="spanish-card-title">
                    <div className="spanish-card-p">Mandatory Taxation</div>
                </div>
            </div>

            <div className="spanish-card-modal-container">
            <div className="spanish-card-modal">
                <div className="spanish-card-modal-p-container">
                    <h2 className="spanish-card-modal-h3">Mandatory Taxation for Spanish Interests</h2>
                    <p>
                    Throughout, taxes were compulsory and had to be collected (50% of crops produced). Peasants were forced to clear forested areas for farming and infrastructures for the new government.
                    </p>
                </div>
            </div>
            </div>
            
        </label>


        </div>

        <Link to="/chapters-directory/chapter-2" style={{ color: 'white' }}>
		  <div className="chapter-two-btn chapter-two-btn-container">
            <button className="chapter-two-links back-btn">Back</button>
			</div>
          </Link>

        
</div>
        
    )
}

export default Developments
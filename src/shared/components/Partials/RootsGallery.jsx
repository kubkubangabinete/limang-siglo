import React, { useState } from "react";
import sampleSpanish from "../../../assets/chii-sample-america.png";
import Ch4Info from "./Ch4Info";

const Roots = () => {
    const [isOpen, setIsOpen] = useState(false);
    const modelRef = React.useRef();
    return (

<div className="spanish-cards-container"> {/* LABEL + ONCLICK */}


    <div className="spanish-cards-list">
    <div className="page-header-container">
        <h1 className="page-header-title">chapter4
        <sup>
                <button className="about-ch" onClick={() => setIsOpen(true)}>
                  ?
                </button>
              </sup></h1>
        <p className="page-header-subtitle">roots of the problems</p>
        <Ch4Info open={isOpen} onClose={() => setIsOpen(false)}/>
    </div>
    
    <input type="checkbox" id="spanish-card-checkbox-toggle-1" />
    <input type="checkbox" id="spanish-card-checkbox-toggle-2" />
    <input type="checkbox" id="spanish-card-checkbox-toggle-3" />

        <label htmlFor="spanish-card-checkbox-toggle-1" className="spanish-1">
            <div className="spanish-card-btn">
                <div className="spanish-card-image">
                    <img className="spanish-card-image-img" src="https://media.giphy.com/media/STK4cRSyq7vhrWEMfl/giphy.gif"/>
                </div>
                <div className="spanish-card-title">
                    <div className="spanish-card-p">Imperialism</div>
                </div>
            </div>

            <div className="spanish-card-modal-container">
            <div className="spanish-card-modal">
                <div className="spanish-card-modal-p-container">
                    <h2 className="spanish-card-modal-h3">Imperialism</h2>
                    <p>
                        Imperialism is the monopoly of a weaker nation’s economy, politics, and culture, where they are controlled and concentrated in the hands of a few big capitalists. They hold the markets, source of raw materials, modern technology, and skilled labor. They have influence on the dictation of laws and policies, and also on the size of production, price, and lending.
                    </p>
                    <p>
                       Rich and powerful nations have been interested in third world countries like the Philippines as a source of cheap raw materials, cheap labor, and a market for their surplus goods and capital. Imperialism prevents peasants from attaining food security, food sovereignty, and from their rights to safe, healthy and ecologically sustainable production.
                    </p>
                </div>
            </div>
            </div>
            
        </label>

        <label htmlFor="spanish-card-checkbox-toggle-2" className="spanish-2">
            <div className="spanish-card-btn">
                <div className="spanish-card-image">
                    <img className="spanish-card-image-img" src="https://media.giphy.com/media/1VYWbsZGOYfAYa31dR/giphy.gif"/>
                </div>
                <div className="spanish-card-title">
                    <div className="spanish-card-p">Feudalism</div>
                </div>
            </div>

            <div className="spanish-card-modal-container">
            <div className="spanish-card-modal">
                <div className="spanish-card-modal-p-container">
                    <h2 className="spanish-card-modal-h3">Feudalism</h2>
                    <p>
                    Feudalism is the oppression against peasants by landlords. Here, agricultural lands are monopolized by a few landlords and vast tracts of land are tilled by the peasantry who face landlessness and food insecurity. Exploitation is intensified through high land rent and high interest and loan rates, slavery, cheap labor and products, and backward method of farming.
                    </p>
                </div>
            </div>
            </div>
            
        </label>

        <label htmlFor="spanish-card-checkbox-toggle-3" className="spanish-3">
            <div className="spanish-card-btn">
                <div className="spanish-card-image">
                    <img className="spanish-card-image-img" src="https://media.giphy.com/media/MCiJ3dGpVcH0YPL82B/giphy.gif"/>
                </div>
                <div className="spanish-card-title">
                    <div className="spanish-card-p">Bureaucrat-Capitalism</div>
                </div>
            </div>

            <div className="spanish-card-modal-container">
            <div className="spanish-card-modal">
                <div className="spanish-card-modal-p-container">
                    <h2 className="spanish-card-modal-h3">Bureaucrat-Capitalism</h2>
                    <p>
                    Bureaucrat capitalism is operating on the government as a business and for the enrichment of those sitting in power. Most top bureaucrats are in national, provincial, and municipal governments.The bureaucrat capitalists direct the operation of the reactionary state. They wield political power to serve imperialists, landlords, and the large comprador bourgeoisie. At the same time, they are harnessing their position to loot from the people’s money and expand land ownership and their own businesses.                
                    </p>
                </div>
                    
            </div>
            </div>
            
        </label>

        </div>

</div>
        
    )
}

export default Roots
import React, { useState } from "react";
import sampleSpanish from "../../../assets/chii-sample-america.png";
import Ch4Info from "./Ch4Info";
import Header from "./Header";

const Roots = () => {
  const [isOpen, setIsOpen] = useState(false);
  const modelRef = React.useRef();
  return (
    <div className="spanish-cards-container">
      {" "}
      {/* LABEL + ONCLICK */}
      <div className="spanish-cards-list">
        <div className="page-header-container">
          <h1 className="page-header-title">
            chapter4
            <sup>
              <button className="about-ch" onClick={() => setIsOpen(true)}>
                ?
              </button>
            </sup>
          </h1>
          <p className="page-header-subtitle">roots of the problems</p>
          <Ch4Info open={isOpen} onClose={() => setIsOpen(false)} />
        </div>

        <input type="checkbox" id="spanish-card-checkbox-toggle-1" />
        <input type="checkbox" id="spanish-card-checkbox-toggle-2" />
        <input type="checkbox" id="spanish-card-checkbox-toggle-3" />

        <label htmlFor="spanish-card-checkbox-toggle-1" className="spanish-1">
          <div className="spanish-card-btn">
            <div className="spanish-card-image">
              <img
                className="spanish-card-image-img"
                src="https://media.giphy.com/media/STK4cRSyq7vhrWEMfl/giphy.gif"
              />
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
                  Imperialism has led to the domination of the economy,
                  politics, and culture of weaker nations by a few big
                  capitalists. This has resulted in the concentration of wealth
                  and power in the hands of a few, who control the markets,
                  source of raw materials, modern technology, and skilled labor.
                  As a result, the Filipino peasantry has been prevented from
                  attaining food security, food sovereignty, and from their
                  rights to safe, healthy, and ecologically sustainable
                  production. The rich and powerful nations have been interested
                  in the country as a source of cheap raw materials, cheap
                  labor, and a market for their surplus goods and capital. This
                  has had a negative impact on the Filipino peasantry, who have
                  been left to face the consequences of imperialism.
                </p>
              </div>
            </div>
          </div>
        </label>

        <label htmlFor="spanish-card-checkbox-toggle-2" className="spanish-2">
          <div className="spanish-card-btn">
            <div className="spanish-card-image">
              <img
                className="spanish-card-image-img"
                src="https://media.giphy.com/media/1VYWbsZGOYfAYa31dR/giphy.gif"
              />
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
                  Feudalism is another issue that has affected the material
                  conditions of the Filipino peasantry. In this system,
                  agricultural lands are monopolized by a few landlords, leaving
                  vast tracts of land to be tilled by the peasantry. This system
                  has led to landlessness and food insecurity for the Filipino
                  peasantry, who face exploitation through high land rent and
                  high-interest and loan rates, slavery, cheap labor and
                  products, and backward farming methods. This has resulted in
                  an unequal distribution of wealth and power, with the Filipino
                  peasantry being left behind.
                </p>
              </div>
            </div>
          </div>
        </label>

        <label htmlFor="spanish-card-checkbox-toggle-3" className="spanish-3">
          <div className="spanish-card-btn">
            <div className="spanish-card-image">
              <img
                className="spanish-card-image-img"
                src="https://media.giphy.com/media/MCiJ3dGpVcH0YPL82B/giphy.gif"
              />
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
                  Bureaucrat-capitalism is a phenomenon where the government
                  operates as a business and enriches those sitting in power.
                  Most top bureaucrats are in national, provincial, and
                  municipal governments. The bureaucrat capitalists direct the
                  operation of the reactionary state, wielding political power
                  to serve imperialists, landlords, and the large comprador
                  bourgeoisie. They also harness their position to loot from the
                  people's money and expand land ownership and their businesses.
                  This has led to the concentration of power and wealth in the
                  hands of a few, further exacerbating the already prevalent
                  issues of imperialism and feudalism.
                </p>
              </div>
            </div>
          </div>
        </label>
      </div>
    </div>
  );
};

export default Roots;

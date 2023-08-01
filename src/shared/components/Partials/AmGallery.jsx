import React, { useState } from "react";
import sampleSpanish from "../../../assets/chii-sample-america.jpeg";
import { Link } from "react-router-dom";
import Ch2Info from "./Ch2Info";
import Header from "./Header";

const American = () => {
  const [checked, setChecked] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const modelRef = React.useRef();

  return (
    <div className="chapter-container">
      <div className="american-cards-list">
        <div className="page-header-container">
          <h1 className="page-header-title">
            chapter2
            <sup>
              <button className="about-ch" onClick={() => setIsOpen(true)}>
                ?
              </button>
            </sup>
          </h1>
          <p className="page-header-subtitle">american colonization</p>
          <Ch2Info open={isOpen} onClose={() => setIsOpen(false)} />
        </div>

        <input type="checkbox" id="american-card-checkbox-toggle-1" />
        <input type="checkbox" id="american-card-checkbox-toggle-2" />
        <input type="checkbox" id="american-card-checkbox-toggle-3" />
        <input type="checkbox" id="american-card-checkbox-toggle-4" />

        <label htmlFor="american-card-checkbox-toggle-1" className="american-1">
          <div className="american-card-btn">
            <div className="american-card-image">
              <img
                className="american-card-image-img"
                src="https://media.giphy.com/media/DHuCILVdIvofvSPIi7/giphy.gif"
              />
            </div>
            <div className="american-card-title">
              <div className="american-card-p">Hacienda Expansion</div>
            </div>
          </div>

          <div className="american-card-modal-container">
            <div className="american-card-modal">
              <div className="american-card-modal-p-container">
                <h2 className="american-card-modal-h3">
                  Expansion of Haciendas
                </h2>
                <p>
                  They encouraged the development of the hacienda system,
                  resulting in extracting more export crops and natural
                  resources — all sold at low prices through cheap labor and the
                  expansion of their base in the country.
                </p>
              </div>
            </div>
          </div>
        </label>

        <label htmlFor="american-card-checkbox-toggle-2" className="american-2">
          <div className="american-card-btn">
            <div className="american-card-image">
              <img
                className="american-card-image-img"
                src="https://media.giphy.com/media/Iemzt229PtS49xD2uU/giphy.gif"
              />
            </div>
            <div className="american-card-title">
              <div className="american-card-p">Anti-Peasant Laws</div>
            </div>
          </div>

          <div className="american-card-modal-container">
            <div className="american-card-modal">
              <div className="american-card-modal-p-container">
                <h2 className="american-card-modal-h3">Anti-Peasant Laws</h2>
                <p>
                  They implemented deceptive laws that only reinforced the land
                  monopoly, land-grabbings, and landlessness. The preservation
                  of the feudal bondage was made possible through the Bell Trade
                  Act, Laurel-Langley Agreement, and other relevant trade
                  policies.
                </p>
              </div>
            </div>
          </div>
        </label>

        <label htmlFor="american-card-checkbox-toggle-3" className="american-3">
          <div className="american-card-btn">
            <div className="american-card-image">
              <img
                className="american-card-image-img"
                src="https://media.giphy.com/media/Ql2nGRMNcLTsgfVbDb/giphy.gif"
              />
            </div>
            <div className="american-card-title">
              <div className="american-card-p">US Market Expansion</div>
            </div>
          </div>

          <div className="american-card-modal-container">
            <div className="american-card-modal">
              <div className="american-card-modal-p-container">
                <h2 className="american-card-modal-h3">US Market Expansion</h2>
                <p>
                  To spread their influence, imports of American commodities
                  were advertised and sold in the motherland. They also sought
                  the Philippines as a market for their surplus goods, which
                  crushed local handicrafts and manufacturers, resorting the
                  Filipinos to buy these overpriced finished goods instead of
                  manufacturing them – leaving them to become dependent on
                  importing expensive goods and exporting cheap ones.
                </p>
              </div>
            </div>
          </div>
        </label>

        <label htmlFor="american-card-checkbox-toggle-4" className="american-4">
          <div className="american-card-btn">
            <div className="american-card-image">
              <img
                className="american-card-image-img"
                src="https://media.giphy.com/media/PtbW7yGXisj3y8DsLR/giphy.gif"
              />
            </div>
            <div className="american-card-title">
              <div className="american-card-p">International Debt</div>
            </div>
          </div>

          <div className="american-card-modal-container">
            <div className="american-card-modal">
              <div className="american-card-modal-p-container">
                <h2 className="american-card-modal-h3">International Debt</h2>
                <p>
                  During the 1950s, foreign machinery and agricultural inputs
                  were sold at excessive prices. This played a major role in the
                  widespread poverty, hunger, and inequality across the
                  Philippines and other colonies. They accumulated so much debt
                  that they have still been taking out loans from international
                  financing institutions such as the International Monetary Fund
                  and World Bank. In exchange for the loans, they have been
                  mandated to buy overpriced genetically modified seeds and
                  agro-chemicals that kill local indigenous crop varieties and
                  sustainable agricultural practices.
                </p>
              </div>
            </div>
          </div>
        </label>
      </div>
      <Link to="/chapters-directory/chapter-2" style={{ color: "white" }}>
        <div className="chapter-two-btn chapter-two-btn-container">
          <button className="chapter-two-links back-btn">Back</button>
        </div>
      </Link>
    </div>
  );
};

export default American;

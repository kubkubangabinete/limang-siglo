import React, { useState } from "react";
import samplePres from "../../../assets/chii-sample-pres.png";
import { Link } from "react-router-dom";
import Ch2Info from "../Partials/Ch2Info";

const Presidents = () => {
  const [checked, setChecked] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const modelRef = React.useRef();

  return (
    <div className="chapter-container">
      {" "}
      {/* LABEL + ONCLICK */}
      <div className="pres-cards-list ">
        <div className="page-header-container">
          <h1 className="page-header-title">
            chapter2
            <sup>
              <button className="about-ch" onClick={() => setIsOpen(true)}>
                ?
              </button>
            </sup>
          </h1>
          <p className="page-header-subtitle">philippine republic</p>
          <Ch2Info open={isOpen} onClose={() => setIsOpen(false)} />
        </div>

        <input type="checkbox" id="pres-card-checkbox-toggle-1" />
        <input type="checkbox" id="pres-card-checkbox-toggle-2" />
        <input type="checkbox" id="pres-card-checkbox-toggle-3" />
        <input type="checkbox" id="pres-card-checkbox-toggle-4" />
        <input type="checkbox" id="pres-card-checkbox-toggle-5" />
        <input type="checkbox" id="pres-card-checkbox-toggle-6" />
        <input type="checkbox" id="pres-card-checkbox-toggle-7" />
        <input type="checkbox" id="pres-card-checkbox-toggle-8" />
        <input type="checkbox" id="pres-card-checkbox-toggle-9" />
        <input type="checkbox" id="pres-card-checkbox-toggle-10" />

        <label htmlFor="pres-card-checkbox-toggle-1" className="pres-1">
          <div className="pres-card-btn">
            <div className="pres-card-image">
              <img
                className="pres-card-image-img"
                src="https://media.giphy.com/media/XZequ0aQUU35ROwfsM/giphy.gif"
              />
            </div>
            <div className="pres-card-title">
              <div className="pres-card-p">Roxas</div>
            </div>
          </div>

          <div className="pres-card-modal-container">
            <div className="pres-card-modal">
              <div className="pres-card-modal-p-container">
                <h2 className="pres-card-modal-h3">Pres. Manuel Roxas</h2>
                <ol>
                  <li>
                  During his term, agreements with the United States, such as the U.S.-R.P. Treaty of General Relations, Property Act, and Bell Trade Act, allowed US ownership and utilization of the country’s lands, natural resources, and public utilities.
                  </li>
                  <li>
                  Roxas' administration attacked peasant communities who were begging for land reform through military forces, evident in the Maliwalu massacre and Masico massacre.
                  </li>
                  <li>
                  Roxas' administration charged peasants for all the unpaid land rent during the recent Philippine-Japanese war.
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </label>

        <label htmlFor="pres-card-checkbox-toggle-2" className="pres-2">
          <div className="pres-card-btn">
            <div className="pres-card-image">
              <img
                className="pres-card-image-img"
                src="https://media.giphy.com/media/YNMBb3bfUZeX7RdrWV/giphy.gif"
              />
            </div>
            <div className="pres-card-title">
              <div className="pres-card-p">Magsaysay</div>
            </div>
          </div>

          <div className="pres-card-modal-container">
            <div className="pres-card-modal">
              <div className="pres-card-modal-p-container">
                <h2 className="pres-card-modal-h3">Pres. Ramon Magsaysay</h2>
                <ol>
                  <li>
                  The 1955 Agrarian Reform Law was implemented during his term, but the agrarian program that aimed for land distribution was barely enforced.
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </label>

        <label htmlFor="pres-card-checkbox-toggle-3" className="pres-3">
          <div className="pres-card-btn">
            <div className="pres-card-image">
              <img
                className="pres-card-image-img"
                src="https://media.giphy.com/media/4Yd7lT7RTfv2MFpU8k/giphy.gif"
              />
            </div>
            <div className="pres-card-title">
              <div className="pres-card-p">Macapagal</div>
            </div>
          </div>

          <div className="pres-card-modal-container">
            <div className="pres-card-modal">
              <div className="pres-card-modal-p-container">
                <h2 className="pres-card-modal-h3">Pres. Diosdado Macapagal</h2>
                <ol>
                  <li>
                  The agrarian program that aimed for limiting land ownership of landlords was barely enforced during his term.
                  </li>
                  <li>
                  Macapagal's administration also attacked peasant communities who were begging for land reform through military forces, evident in the Maliwalu massacre and Masico massacre.
                  </li>
                  <li>
                  During his term, land rent was raised, causing the decline of prices of farmers’ agricultural goods, and plantations for export crops were expanded under the 1963 Agrarian Reform Code.
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </label>

        <label htmlFor="pres-card-checkbox-toggle-4" className="pres-4">
          <div className="pres-card-btn">
            <div className="pres-card-image">
              <img
                className="pres-card-image-img"
                src="https://media.giphy.com/media/qyUEO3pd72JmWc9Fd5/giphy.gif"
              />
            </div>
            <div className="pres-card-title">
              <div className="pres-card-p">Marcos</div>
            </div>
          </div>

          <div className="pres-card-modal-container">
            <div className="pres-card-modal">
              <div className="pres-card-modal-p-container">
                <h2 className="pres-card-modal-h3">Pres. Ferdinand Marcos</h2>
                <ol>
                  <li>
                  Rice and corn farms were subjected to land distribution, yet haciendas and plantations devoted to export crops like sugar, copra, bananas, tobacco, and pineapples were exempted. This deprived more than half of farmers of their own lands. This was through the Presidential Decree 2 and 27.
                  </li>
                  <li>
                  The lands of foreign corporate farms and plantations were expanded, and farms owned by peasants were then acquired by these big businesses instead of acquiring idle, abandoned, or unexploited lands. This raised rural poverty and landlessness through the Green Revolution/Masagana 99.
                  </li>
                  <li>
                  Marcos' administration required farmers to use expensive imported seeds, chemical soil fertilizers, and pesticides. This, along with the ever-increasing prices of farm inputs, buried farmers in debt and pushed them into poverty through the Green Revolution/Masagana 99.
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </label>

        <label htmlFor="pres-card-checkbox-toggle-5" className="pres-5">
          <div className="pres-card-btn">
            <div className="pres-card-image">
              <img
                className="pres-card-image-img"
                src="https://media.giphy.com/media/2wLBocQAO8OPfTJcLK/giphy.gif"
              />
            </div>
            <div className="pres-card-title">
              <div className="pres-card-p">Aquino</div>
            </div>
          </div>

          <div className="pres-card-modal-container">
            <div className="pres-card-modal">
              <div className="pres-card-modal-p-container">
                <h2 className="pres-card-modal-h3">Pres. Corazon Aquino</h2>
                <ol>
                  <li>
                  The Comprehensive Agrarian Reform Program (CARP) was implemented, but the administration’s agrarian program failed to redistribute land to peasants and only empowered large agribusinesses.
                  </li>
                  <li>
                  Aquino's administration prohibited workers from their right to strike, through the Herrera Bill.
                  </li>
                  <li>
                  The administration declared a “Total War” policy to suppress peasant voices, which led to the Mendiola Massacre.
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </label>

        <label htmlFor="pres-card-checkbox-toggle-6" className="pres-6">
          <div className="pres-card-btn">
            <div className="pres-card-image">
              <img
                className="pres-card-image-img"
                src="https://media.giphy.com/media/QD11atC0rtZsiwSGrM/giphy.gif"
              />
            </div>
            <div className="pres-card-title">
              <div className="pres-card-p">Ramos</div>
            </div>
          </div>

          <div className="pres-card-modal-container">
            <div className="pres-card-modal">
              <div className="pres-card-modal-p-container">
                <h2 className="pres-card-modal-h3">Pres. Fidel Ramos</h2>
                <ol>
                  <li>
                  Peasant-owned lands were privatized and commercialized, expanding business interests and worsening peasant landlessness through the Philippines 2000 program.
                  </li>
                  <li>
                  The administration further encouraged export-oriented production of cheap goods and importation of expensive ones through joining the World Trade Organization.
                  </li>
                  <li>
                  Ramos' administration declared a war on the peasant Moros in the countryside.
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </label>

        <label htmlFor="pres-card-checkbox-toggle-7" className="pres-7">
          <div className="pres-card-btn">
            <div className="pres-card-image">
              <img
                className="pres-card-image-img"
                src="https://media.giphy.com/media/xWTbV9TNWDkvjMedr8/giphy.gif"
              />
            </div>
            <div className="pres-card-title">
              <div className="pres-card-p">Estrada</div>
            </div>
          </div>

          <div className="pres-card-modal-container">
            <div className="pres-card-modal">
              <div className="pres-card-modal-p-container">
                <h2 className="pres-card-modal-h3">Pres. Joseph Estrada</h2>
                <ol>
                  <li>Estrada did not have any programs for peasants at all.</li>
                  <li>
                  Estrada declared an “All Out War” on Moros in the countryside.
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </label>

        <label htmlFor="pres-card-checkbox-toggle-8" className="pres-8">
          <div className="pres-card-btn">
            <div className="pres-card-image">
              <img
                className="pres-card-image-img"
                src="https://media.giphy.com/media/s7mVTtCxH5vjzRsxcg/giphy.gif"
              />
            </div>
            <div className="pres-card-title">
              <div className="pres-card-p">Arroyo</div>
            </div>
          </div>

          <div className="pres-card-modal-container">
            <div className="pres-card-modal">
              <div className="pres-card-modal-p-container">
                <h2 className="pres-card-modal-h3">Pres. Gloria Arroyo</h2>
                <ol>
                  <li>
                  The national income for agriculture further declined because of excessive importation, causing millions of farmers to lose their livelihoods, forcing them to sell or mortgage their very little lands, and look for other jobs in cities. Worse, the products that were being imported could be produced in the Philippines – rice, vegetables, sugar, and fish.
                  </li>
                  <li>
                    Militarization and bombings in the countryside (i.e., Bangsa
                    Moro, Liguasan Marsh, Capiz).
                  </li>
                  <li>
                  Arroyo's administration launched extrajudicial killings of members, leaders, and sympathizers of the peasantry, including priests, journalists, lawyers, doctors, students, and more, through Oplan Bantay Laya.
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </label>

        <label htmlFor="pres-card-checkbox-toggle-9" className="pres-9">
          <div className="pres-card-btn">
            <div className="pres-card-image">
              <img
                className="pres-card-image-img"
                src="https://media.giphy.com/media/wCdjVvi5VQpeanKUdu/giphy.gif"
              />
            </div>
            <div className="pres-card-title">
              <div className="pres-card-p">Aquino III</div>
            </div>
          </div>

          <div className="pres-card-modal-container">
            <div className="pres-card-modal">
              <div className="pres-card-modal-p-container">
                <h2 className="pres-card-modal-h3">Pres. Benigno Aquino III</h2>
                <ol>
                  <li>
                  The Comprehensive Agrarian Reform Program Extension with Reforms (CARPER) was implemented, but the new agrarian reform that was passed only worsened rural poverty and landlessness.
                  </li>
                  <li>
                  Aquino III's administration worsened the imperialist exploitation of the country’s natural resources through Public-Private Partnerships (PPP).
                  </li>
                  <li>
                  Counter-insurgency campaigns were reinforced that mainly affected those in the countryside through Oplan Bayanihan.
                  </li>
                  <li>
                  Thousands of farmers who were asking for agricultural support were shot by state forces in the Kidapawan massacre.
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </label>

        <label htmlFor="pres-card-checkbox-toggle-10" className="pres-10">
          <div className="pres-card-btn">
            <div className="pres-card-image">
              <img
                className="pres-card-image-img"
                src="https://media.giphy.com/media/GNSVc2HW3BNYXDjQFl/giphy.gif"
              />
            </div>
            <div className="pres-card-title">
              <div className="pres-card-p">Duterte</div>
            </div>
          </div>

          <div className="pres-card-modal-container">
            <div className="pres-card-modal">
              <div className="pres-card-modal-p-container">
                <h2 className="pres-card-modal-h3">Pres. Rodrigo Duterte</h2>
                <ol>
                  <li>
                  Overprioritization of infrastructure projects led to trillions of debts and failure of distribution of government funds through Build! Build! Build!
                  </li>
                  <li>
                    Increased taxes of basic commodities, burdening the masses
                    even more, especially the poorest. These are also used to
                    pay off the country’s high amounts of debts. (Through Train
                    Law of 2018.)
                  </li>
                  <li>
                    Worsened peasant-farmer livelihoods by prioritizing rice
                    importation through removing rice import quotas. (Through
                    Rice Liberalization Law.)
                  </li>
                  <li>
                    Created a national task force that only put peasant lives in
                    danger, as they are popular targets of violence and black
                    propaganda among state forces. (Through Executive Order No.
                    70 (NTF-ELCAC) and “whole-of-nation” approach)
                  </li>
                </ol>
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

export default Presidents;

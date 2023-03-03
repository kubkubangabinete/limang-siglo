import React, { useState } from "react";
import samplePres from "../../../assets/chii-sample-pres.png"
import { Link } from "react-router-dom";
import Ch2Info from "../Partials/Ch2Info";

const Presidents = () => {

    const [checked, setChecked] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const modelRef = React.useRef();

    return (
        
<div className="pres-cards-container"> {/* LABEL + ONCLICK */}

    <div className="pres-cards-list ">
    <div className="page-header-container">
        <h1 className="page-header-title">chapter2
        <sup>
                <button className="about-ch" onClick={() => setIsOpen(true)}>
                  ?
                </button>
              </sup></h1>
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
                    <img className="pres-card-image-img" src="https://media.giphy.com/media/XZequ0aQUU35ROwfsM/giphy.gif"/>
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
                        <li>Maintained US ownership and utilization of the country’s lands, natural resources, and public utilities through agreements with the United States (e.g., U.S.-R.P. Treaty of General Relations, Property Act, and Bell Trade Act).</li>
                        <li>Attacked peasant communities who were begging for land reform through military forces (e.g., Maliwalu massacre and Masico massacre).</li>
                        <li>Charged peasants for all the unpaid land rent during the recent Philippine-Japanese war.</li>
                    </ol>
                </div>
            </div>
            </div>
            
        </label>

        <label htmlFor="pres-card-checkbox-toggle-2" className="pres-2">
            <div className="pres-card-btn">
                <div className="pres-card-image">
                    <img className="pres-card-image-img" src="https://media.giphy.com/media/YNMBb3bfUZeX7RdrWV/giphy.gif"/>
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
                        <li>The agrarian program that aimed for land distribution was barely enforced (i.e., 1955 Agrarian Reform Law).</li>
                    </ol>
                </div>
            </div>
            </div>
            
        </label>

        <label htmlFor="pres-card-checkbox-toggle-3" className="pres-3">
            <div className="pres-card-btn">
                <div className="pres-card-image">
                    <img className="pres-card-image-img" src="https://media.giphy.com/media/4Yd7lT7RTfv2MFpU8k/giphy.gif"/>
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
                        <li>The agrarian program that aimed for limiting land ownership of landlords was barely enforced.</li>                       
                        <li>Attacked peasant communities who were begging for land reform through military forces (e.g., Maliwalu massacre and Masico massacre).</li>
                        <li>Raised land rent, caused the decline of prices of farmers’ agricultural goods, and expanded plantations for export crops. (Points 1 and 2 through the 1963 Agrarian Reform Code.)</li>
                    </ol>
                </div>
            </div>
            </div>
            
        </label>

        <label htmlFor="pres-card-checkbox-toggle-4" className="pres-4">
            <div className="pres-card-btn">
                <div className="pres-card-image">
                    <img className="pres-card-image-img" src="https://media.giphy.com/media/qyUEO3pd72JmWc9Fd5/giphy.gif"/>
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
                        <li>Subjected rice and corn farms to land distribution yet exempted haciendas and plantations devoted to export crops like sugar, copra, bananas, tobacco, pineapples, etc. More than half of farmers were deprived of their own lands. (Through the Presidential Decree 2 and 27.) </li>
                        <li>Expanded the lands of foreign corporate farms and plantations. Farms owned by peasants were then stolen by these big businesses, instead of acquiring idle, abandoned, or unexploited lands. In turn, this raised rural poverty and landlessness. (Through the Green Revolution/Masagana 99.)</li>
                        <li>Required farmers to use expensive imported seeds, chemical soil fertilizers, and pesticides. This, as well as the adding ever-increasing prices of farm inputs, buried the farmers in debt and pushed them into poverty. (Through the Green Revolution/Masagana 99.)</li>
                    </ol>
                </div>
            </div>
            </div>
            
        </label>

        <label htmlFor="pres-card-checkbox-toggle-5" className="pres-5">
            <div className="pres-card-btn">
                <div className="pres-card-image">
                    <img className="pres-card-image-img" src="https://media.giphy.com/media/2wLBocQAO8OPfTJcLK/giphy.gif"/>
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
                        <li>The administration’s agrarian program failed to redistribute land to peasants and only empowered large agribusinesses (i.e., Comprehensive Agrarian Reform Program (CARP)).</li>
                        <li>Prohibited workers from their right to strike (i.e., Herrera Bill).</li>
                        <li>Declared a “Total War” policy to suppress peasant voices. The worst massacre that happened under this was the Mendiola Massacre.</li>
                    </ol>
                </div>
            </div>
            </div>
            
        </label>

        <label htmlFor="pres-card-checkbox-toggle-6" className="pres-6">
            <div className="pres-card-btn">
                <div className="pres-card-image">
                    <img className="pres-card-image-img" src="https://media.giphy.com/media/QD11atC0rtZsiwSGrM/giphy.gif"/>
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
                        <li>Privatized and commercialized peasant-owned lands, expanding business interests and worsening peasant landlessness. (Through the Philippines 2000 program.)</li>
                        <li>Further encouraged export-oriented production of cheap goods and importation of expensive ones. (Through joining the World Trade Organization.) </li>
                        <li>Declared a war on the peasant Moros in the countryside.</li>
                    </ol>
                </div>
            </div>
            </div>
            
        </label>

        <label htmlFor="pres-card-checkbox-toggle-7" className="pres-7">
            <div className="pres-card-btn">
                <div className="pres-card-image">
                    <img className="pres-card-image-img" src="https://media.giphy.com/media/xWTbV9TNWDkvjMedr8/giphy.gif"/>
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
                        <li>Did not have any programs for peasants at all.</li>
                        <li>Declared an “All Out War” on Moros in the countryside.</li>
                    </ol>
                </div>
            </div>
            </div>
            
        </label>

        <label htmlFor="pres-card-checkbox-toggle-8" className="pres-8">
            <div className="pres-card-btn">
                <div className="pres-card-image">
                    <img className="pres-card-image-img" src="https://media.giphy.com/media/s7mVTtCxH5vjzRsxcg/giphy.gif"/>
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
                        <li>The national income for agriculture further declined because of excessive importation. Because of this, millions of farmers lost their livelihoods, were forced to sell or mortgage their very little lands, and were forced to look for other jobs in cities because. Worse, the products that were being imported were products that could be produced in the Philippines – rice, vegetables, sugar, and fish.</li>
                        <li>Militarization and bombings in the countryside (i.e., Bangsa Moro, Liguasan Marsh, Capiz).</li>
                        <li>EJKs of members, leaders, sympathizers of the peasantry; even priests, journalists, lawyers, doctors, students, etc. (Through Oplan Bantay Laya.)</li>
                    </ol>
                </div>
            </div>
            </div>
            
        </label>

        <label htmlFor="pres-card-checkbox-toggle-9" className="pres-9">
            <div className="pres-card-btn">
                <div className="pres-card-image">
                    <img className="pres-card-image-img" src="https://media.giphy.com/media/wCdjVvi5VQpeanKUdu/giphy.gif"/>
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
                        <li>The new agrarian reform that was passed only worsened rural poverty and landlessness (i.e., CARPER).</li>
                        <li>Worsened imperialist exploitation of the country’s natural resources (Through PPP).</li>
                        <li>Reinforced counter-insurgency campaigns that mainly affected those in the countryside. (Through Oplan Bayanihan.)</li>
                        <li>Thousands of farmers who were asking for agricultural support were shot by state forces (Kidapawan massacre).</li>
                    </ol>
                </div>
            </div>
            </div>
            
        </label>

        <label htmlFor="pres-card-checkbox-toggle-10" className="pres-10">
            <div className="pres-card-btn">
                <div className="pres-card-image">
                    <img className="pres-card-image-img" src="https://media.giphy.com/media/GNSVc2HW3BNYXDjQFl/giphy.gif"/>
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
                        <li>Overprioritzation of infrastructure projects that lead to trillions of debts and failure of distribution of government funds. (Through Build! Build! Build!)</li>
                        <li>Increased taxes of basic commodities, burdening the masses even more, especially the poorest. These are also used to pay off the country’s high amounts of debts. (Through Train Law of 2018.)</li>
                        <li>Worsened peasant-farmer livelihoods by prioritizing rice importation through removing rice import quotas. (Through Rice Liberalization Law.)</li>
                        <li>Created a national task force that only put peasant lives in danger, as they are popular targets of violence and black propaganda among state forces. (Through Executive Order No. 70 (NTF-ELCAC) and “whole-of-nation” approach)</li>
                    </ol>
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

export default Presidents

import React, { useState } from "react";
import sampleLandscape from "../../../assets/chii-sample1.png";
import Ch3Info from "./Ch3Info";

const Plight = () => {
  const [isOpen, setIsOpen] = useState(false);
  const modelRef = React.useRef();
    return (


  <div>

<div className="prec-1">
        <h1 className="page-header-title">chapter3
        <sup>
                <button className="about-ch" onClick={() => setIsOpen(true)}>
                  ?
                </button>
              </sup></h1>
        
        <p className="page-header-subtitle">plight of the peasantry</p>
        <Ch3Info open={isOpen} onClose={() => setIsOpen(false)}/> 
    </div>


    <div className="plight-carousel">
    
      <a className="plight-carousel__skip-link" href="#plight-skip-link">Skip the plight-Carousel</a>
        <div className="plight-slides">
    
          <div className="plight-slides-item plight-slide-1" id="plight-slide-1" aria-label="slide 1 of 10" tabIndex="0">
            <div className="plight-card-image">
                <img className="plight-card-image-img" src="https://media.giphy.com/media/FTttO6GosqxuvvsMHn/giphy.gif"/>
            </div>
            <div className="plight-card-modal-container">
              <div className="plight-card-modal-p-container">
                <h2 className="plight-card-modal-h3">Landlessness</h2>
                <p className="plight-card-modal-p">
                  At least 7 out of 10 farmers are landless and do not own the land they till. For a farmer, losing their land is like losing their basic right to existence.
                </p>
              </div>
            </div>
          </div>
    
        <div className="plight-slides-item plight-slide-2" id="plight-slide-2" aria-label="slide 2 of 10" tabIndex="0">
            <div className="plight-card-image">
                <img className="plight-card-image-img" src="https://media.giphy.com/media/sq9TLxv9OIV6G79nb9/giphy.gif"/>
            </div>
            <div className="plight-card-modal-container">
            <div className="plight-card-modal-p-container">
                <h2 className="plight-card-modal-h3">Land Monopoly</h2>
                <p className="plight-card-modal-p">
                Today, peasants are still forced to give up their lands because of the conversion of agricultural lands to commercial use. Many are evicted from their lands through military means and anti-peasant laws and policies.
                </p>
                <p className="plight-card-modal-p">
                In many cases, there are peasants who are the owners of their lands as declared on paper, yet the agribusinesses are always the ones who control and benefit from them. Peasants cannot also grow their own crops on abandoned commercial lands they used to work on, do not have the autonomy to choose which types of crops and agricultural inputs to use, and are forced to buy and use expensive environment- and health-damaging foreign imports of agricultural inputs.
                </p>
              </div>
            </div>
        </div>
        <div className="plight-slides-item plight-slide-3" id="plight-slide-3" aria-label="slide 3 of 10" tabIndex="0">
        <div className="plight-card-image">
                <img className="plight-card-image-img" src="https://media.giphy.com/media/uzrHKx47ihF4lQb0aC/giphy.gif"/>
            </div>
            <div className="plight-card-modal-container">
            <div className="plight-card-modal-p-container">
                <h2 className="plight-card-modal-h3">Food Insecurity</h2>
                <p className="plight-card-modal-p">
                The ever-expansion of land monopoly among big landlords and agribusinesses are a threat to the food security of Filipinos, especially the peasants. Export crops have taken over and far exceeded the rice and corn farms, which the peasants mainly depend on for food and sustenance.
                </p>
                <p className="plight-card-modal-p">
                The influx of imported expensive agricultural products, too, have taken a toll on their livelihoods and food as they end up earning next to nothing.
                </p>
              </div>
            </div>
        </div>
        <div className="plight-slides-item plight-slide-4" id="plight-slide-4" aria-label="slide 4 of 10" tabIndex="0">
        <div className="plight-card-image">
                <img className="plight-card-image-img" src="https://media.giphy.com/media/GzSaTt5YK9xGw6aVy1/giphy.gif"/>
            </div>
            <div className="plight-card-modal-container">
            <div className="plight-card-modal-p-container">
                <h2 className="plight-card-modal-h3">Low Wages</h2>
                <p className="plight-card-modal-p">
                Peasant workers are paid below their required basic income and are forced to sell their agricultural products at a very low price. The national minimum wage is also not adequate enough for them to achieve financial security.
                </p>
              </div>
            </div>
        </div>
        <div className="plight-slides-item plight-slide-5" id="plight-slide-5" aria-label="slide 5 of 10" tabIndex="0">
        <div className="plight-card-image">
                <img className="plight-card-image-img" src={sampleLandscape}/>
            </div>
            <div className="plight-card-modal-container">
            <div className="plight-card-modal-p-container">
                <h2 className="plight-card-modal-h3">High Land Rent</h2>
                <p className="plight-card-modal-p">
                Peasants are obliged to pay for land rent at a high cost.              </p>
              </div>
            </div>
        </div>
        <div className="plight-slides-item plight-slide-6" id="plight-slide-6" aria-label="slide 6 of 10" tabIndex="0">
        <div className="plight-card-image">
                <img className="plight-card-image-img" src="https://media.giphy.com/media/fZgaDnsLftBgD6LQIQ/giphy.gif"/>
            </div>
            <div className="plight-card-modal-container">
            <div className="plight-card-modal-p-container">
                <h2 className="plight-card-modal-h3">High Loan and Tax Interest Rates</h2>
                <p className="plight-card-modal-p">
                Extreme poverty compels peasants to take out loans with high interest rates.               </p>
              </div>
            </div>
        </div>
        <div className="plight-slides-item plight-slide-7" id="plight-slide-7" aria-label="slide 7 of 10" tabIndex="0">
        <div className="plight-card-image">
                <img className="plight-card-image-img" src="https://media.giphy.com/media/allqaf8rK2bG7hPci1/giphy.gif"/>
            </div>
            <div className="plight-card-modal-container">
            <div className="plight-card-modal-p-container">
                <h2 className="plight-card-modal-h3">Forced Labor</h2>
                <p className="plight-card-modal-p">
                Members of farmer’s families serve the landlords’ household for free.              </p>
              </div>
            </div>
        </div>
        <div className="plight-slides-item plight-slide-8" id="plight-slide-8" aria-label="slide 8 of 10" tabIndex="0">
        <div className="plight-card-image">
                <img className="plight-card-image-img" src="https://media.giphy.com/media/JPH7nyTLXN21Hl9QXj/giphy.gif"/>
            </div>
            <div className="plight-card-modal-container">
            <div className="plight-card-modal-p-container">
                <h2 className="plight-card-modal-h3">Militarization</h2>
                <p className="plight-card-modal-p">
                Peasants are a popular target of state forces. Therefore, they are also the most red-tagged, criminalized, and harassed.               </p>
              </div>
            </div>
        </div>
        <div className="plight-slides-item plight-slide-9" id="plight-slide-9" aria-label="slide 9 of 10" tabIndex="0">
        <div className="plight-card-image">
                <img className="plight-card-image-img" src="https://media.giphy.com/media/fhEYRG1rkFIC3AMfgI/giphy.gif"/>
            </div>
            <div className="plight-card-modal-container">
            <div className="plight-card-modal-p-container">
                <h2 className="plight-card-modal-h3">Killings and Human Rights Abuses</h2>
                <p className="plight-card-modal-p">
                Majority of EJK victims are peasants.
                </p>
              </div>
            </div>
        </div>
        <div className="plight-slides-item plight-slide-10" id="plight-slide-10" aria-label="slide 10 of 10" tabIndex="0">
        <div className="plight-card-image">
                <img className="plight-card-image-img" src="https://media.giphy.com/media/lmKisCsdqmyZHhviNK/giphy.gif"/>
            </div>
            <div className="plight-card-modal-container">
            <div className="plight-card-modal-p-container">
                <h2 className="plight-card-modal-h3">Bogus Land Reforms</h2>
                <p className="plight-card-modal-p">
                The land reforms that preceded were only farce, violent, loan-based, and empowered big foreign and local landlords and businesses.               </p>
              </div>
            </div>
        </div>
      </div>
    
      <div className="plight-carousel__nav">
        <a className="plight-slider-nav" href="#plight-slide-1" aria-label="Go to slide 1">1</a>
        <a className="plight-slider-nav" href="#plight-slide-2" aria-label="Go to slide 2">2</a>
        <a className="plight-slider-nav" href="#plight-slide-3" aria-label="Go to slide 3">3</a>
        <a className="plight-slider-nav" href="#plight-slide-4" aria-label="Go to slide 4">4</a>
        <a className="plight-slider-nav" href="#plight-slide-5" aria-label="Go to slide 5">5</a>
        <a className="plight-slider-nav" href="#plight-slide-6" aria-label="Go to slide 6">6</a>
        <a className="plight-slider-nav" href="#plight-slide-7" aria-label="Go to slide 7">7</a>
        <a className="plight-slider-nav" href="#plight-slide-8" aria-label="Go to slide 8">8</a>
        <a className="plight-slider-nav" href="#plight-slide-9" aria-label="Go to slide 9">9</a>
        <a className="plight-slider-nav" href="#plight-slide-10" aria-label="Go to slide 10">10</a>
      </div>
      <div className="plight-carousel__skip-message" id="plight-skip-link" tabIndex="0"></div>
    </div>
  </div>

        
    )
}

export default Plight
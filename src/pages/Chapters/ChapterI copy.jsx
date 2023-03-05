import { motion } from "framer-motion";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import farmvid from "../../assets/vids/Chapter-1.webm";
import Ch2Info from "../../shared/components/Partials/Ch2Info copy";
import HeadWoman1 from "../../assets/Head_Woman-1.png";
import HeadMan1 from "../../assets/Head_Man-1.png";
import HeadMan2 from "../../assets/Head_Man-2.png";

const ChapterIPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const modelRef = React.useRef();
  return (
    
    <div className="farm-vid-container">
      <input type="checkbox" id="headwoman1-toggle" />
      <input type="checkbox" id="headman2-card-toggle" />
      <input type="checkbox" id="headman1-card-toggle" />

      <video autoPlay muted loop id="farmvid">
        <source src={farmvid} type="video/mp4" />
      </video>

      
      <div className="farm-heads-container">

        <label htmlFor="headwoman1-toggle" className="farm-head-icon">
          <div className="">
            <img className="farm-head-img" src={HeadWoman1}/>
          </div>

          <div className="dialogue-modal-container">
            <div className="dialogue-modal-text">
              <h2 className="dialogue-modal-h2">
                Peasant Indigenous Woman
              </h2>
              <p className="dialogue-modal-p">
                Im your peasant queen! Mother 💅💅💅
            </p>
            </div>
          </div>
        </label>

        <label htmlFor="headman2-card-toggle" className="farm-head-icon">
            <div className="">
              <img className="farm-head-img" src={HeadMan2}/>
            </div>
        </label>

        <label htmlFor="headman1-card-toggle" className="farm-head-icon">
            <div className="">
              <img className="farm-head-img" src={HeadMan1}/>
            </div>
        </label>
        
        
        {/* <label htmlFor="american-card-checkbox-toggle-1" className="american-1">
            <div className="american-card-btn">
                <div className="american-card-image">
                    <img className="american-card-image-img" src={sampleSpanish}/>
                </div>
                <div className="american-card-title">
                    <div className="american-card-p">Hacienda Expansion</div>
                </div>
            </div>

            <div className="american-card-modal-container">
            <div className="american-card-modal">
                <div className="american-card-modal-p-container">
                    <h2 className="american-card-modal-h3">Expansion of Haciendas</h2>
                    <p>
                    They encouraged the development of the hacienda system, resulting in extracting more export crops and natural resources — all sold at low prices through cheap labor and the expansion of their base in the country.
                    </p>
                </div>
            </div>
            </div>
            
        </label> */}
        
      </div>

    

      {/* Part 1: Woman */}
      <div className="farm-dialogue-container-1">
        <div className="farm-dialogue-image-1">
          <img></img>
        </div>
        
        <div className="farm-dialogue-1">
          <p>Oh, hi there. I didn't notice you.</p>
        </div>
        <div className="farm-dialogue-2">
          <p>Peasants, you say?</p>
        </div>
        <div className="farm-dialogue-3">
          <p>Peasants are basically farmers who are
            tied to a <i>feudal</i> bondage. Feudal, as
            in landlord versus peasant. The land
            we till is not ours.
          </p>
        </div>
        <div className="farm-dialogue-4">
          <p>Land is really important to us,
            especially when it's what we get 
            our food and livelihood from.
          </p>
        </div>
        <div className="farm-dialogue-5">
          <p>I hope that helped a bit.
            You can ask the other two if you
            want to know more, okay?
          </p>
        </div>

      </div>

      {/* Part 2: Man 1 (green shirt) */}
      <div className="farm-dialogue-container-2">
        <div className="farm-dialogue-image-2">
          <img></img>
        </div>
        
        <div className="farm-dialogue-6">
          <p>Hello, I was just fishing a while ago.</p>
        </div>
        <div className="farm-dialogue-7">
          <p>Yes, I am a fisherman but I also farm.
            Do you know peasants can earn from
            various livelihoods?
          </p>
        </div>
        <div className="farm-dialogue-8">
          <p>Some raise animals. Some are
            carpenters. Some may also do handicraft work
            like that lady over there.
          </p>
        </div>
        <div className="farm-dialogue-9">
          <p>Nevertheless, we're still peasants.
            Landless farmers who have a common
            dream of having a land of our own.
          </p>
        </div>


      </div>

      {/* Part 3: Man 2 (big hat) */}
      <div className="farm-dialogue-container-3">
        <div className="farm-dialogue-image-3">
          <img></img>
        </div>
        
        <div className="farm-dialogue-10">
          <p>Hey, need something?</p>
        </div>
        <div className="farm-dialogue-11">
          <p>Sure, I think can share a thing or two.</p>
        </div>
        <div className="farm-dialogue-12">
          <p>In the countryside or rural areas,
            peasants can be rich, middle, or poor.
          </p>
        </div>
        <div className="farm-dialogue-13">
          <p>Of course, they are exactly
            alike to those in urban areas. The urban
            rich is different from the rural rich.
          </p>
        </div>
        <div className="farm-dialogue-14">
          <p>Rich, middle, or poor peasant — they
            are still peasants after all, oppressed
            and exploited by powerful forces.
          </p>
        </div>
        <div className="farm-dialogue-15">
          <p>Big landlords, corporations, and bureaucrats.</p>
        </div>
        <div className="farm-dialogue-16">
          <p>That's pretty much it. Thanks for dropping by.</p>
        </div>

      </div>

    </div>
  );
};

export default ChapterIPage;

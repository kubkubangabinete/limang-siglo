import { motion } from "framer-motion";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import farmvid from "/src/assets/vids/Chapter-1.webm";

const ChapterIPage = () => {
  const [checked, setChecked] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const modelRef = React.useRef();
  return (
    
    <div className="farm-vid-container">

      <video autoPlay muted loop id="farmvid">
        <source src={farmvid} type="video/mp4" />
      </video>

      {/* <div className="farm-heads-container">
        <img src="/src/assets/Head_Man-1.png"/>
        <img src="/src/assets/Head_Man-2.png"/>
        <img src="/src/assets/Head_Woman-1.png"/>
      </div> */}

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

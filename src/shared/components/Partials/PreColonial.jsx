import React, { useState } from "react";
import PreColonial1 from "./PreColonial1";
import PreColonial2 from "./PreColonial2";

const PreColonial = () => {
  const [is1Open, setIs1Open] = useState(true);
  const [is2Open, setIs2Open] = useState(false);

  return (
    <div className="chapter-container">

      {is1Open && <PreColonial1 />}
      {is2Open && <PreColonial2 />}

      {/* Pagination */}
      <div className="dev-carousel__nav">
        <button onClick={() => { setIs1Open(true); setIs2Open(false); }} className="dev-slider-nav">
          1
        </button>

        <button onClick={() => { setIs1Open(false); setIs2Open(true); }} className="dev-slider-nav">
          2
        </button>
       
      </div>
    </div>
  );
};

export default PreColonial;

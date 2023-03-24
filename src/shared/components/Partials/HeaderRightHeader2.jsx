import React, { useState } from "react";
import HeaderAudioButton2 from "./HeaderAudioButton2";
import HeaderNotebook1 from "./HeaderNotebook1";
import HeaderNotebook2 from "./HeaderNotebook2";
import HeaderAbout1 from "./HeaderAbout1";
import HeaderAbout2 from "./HeaderAbout2";
import HeaderHamButton from "./HeaderHamButton";

const HeaderRightHeader2 = () => {
  const [checked, setChecked] = useState(false);

  return (
    <div className="right-header">
      <HeaderHamButton />
      <div className="menu">
        <HeaderNotebook1 />
        <HeaderAudioButton2 />
        <HeaderAbout1 setChecked={setChecked} />
      </div>
      <HeaderAbout2 />
      <HeaderNotebook2 />
    </div>
  );
};

export default HeaderRightHeader2;

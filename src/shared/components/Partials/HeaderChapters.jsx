import React, { useState } from "react";
import ChaptersContainer from "./ChaptersContainer";
import Tour from "reactour";

const steps = [
  {
    selector: ".chapters-btn",
    content: "This is the chapters. It provides navigation and additional information.",
  },
];

const HeaderChapters = () => {
  const [isTourOpen, setIsTourOpen] = useState(false); // added state for reactour
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="footer">
        <div>
          <button className="chapters-btn" onClick={() => setIsOpen(true)}>
            Chapters
          </button>
          <ChaptersContainer open={isOpen} onClose={() => setIsOpen(false)} />
        </div>
        {
        // added reactour component
        isTourOpen && (
          <Tour
            steps={steps}
            isOpen={isTourOpen}
            onRequestClose={() => setIsTourOpen(false)}
          />
        )
      }
      </div>
  );
};

export default HeaderChapters;

// import React from "react";
// import HeaderHome from "./HeaderHome";
// import HeaderChapters from "./HeaderChapters";
// import RotateDevice from "./RotateDevice";
// import HeaderRightHeader from "./HeaderRightHeader";
// import Tour from "reactour";

// const steps = [
//   {
//     selector: ".nav-header",
//     content: "This is the website header. It provides navigation and additional information.",
//   },
// ];

// const Header = () => {
//   const [isTourOpen, setIsTourOpen] = useState(false); // added state for reactour

//   return (
//     <div>
//       <div className="nav-header">
//         <HeaderHome />
//         <HeaderRightHeader />
//       </div>
//       <HeaderChapters />
//       <RotateDevice />
//       {
//         // added reactour component
//         isTourOpen && (
//           <Tour
//             steps={steps}
//             isOpen={isTourOpen}
//             onRequestClose={() => setIsTourOpen(false)}
//           />
//         )
//       }
//     </div>
//   );
// };

// export default Header;


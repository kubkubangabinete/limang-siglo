import React, { useState } from "react";
import ImportContactsOutlinedIcon from "@mui/icons-material/ImportContactsOutlined";
import Tour from 'reactour';

const steps = [
  {
    selector: '.menu-element-i',
  },
  // Add more steps as needed
];

const HeaderNotebook1 = () => {
  const [isTourOpen, setIsTourOpen] = useState(false); // added state for reactour
  return (
    <a className="menu-element-i">
      <label htmlFor="ntbk-checkbox-toggle" className="ntbk-btn">
        <ImportContactsOutlinedIcon className="material-icons ntbk-icon" />
      </label>
    </a>
  );
};

export default HeaderNotebook1;

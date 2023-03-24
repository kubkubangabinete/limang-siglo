import React, { useState } from "react";
import TabsContent from "./TabsContent";

const HeaderNotebook2 = () => {
  return (
      <>
      <input
        type="checkbox"
        id="ntbk-checkbox-toggle"
        className="ntbk-checkbox"
      />
      <div className="ntbk-overlay">
        <label
          htmlFor="ntbk-checkbox-toggle"
          className="ntbk-overlay-close"
        ></label>
      </div>
      <TabsContent />
      </>
  );
};

export default HeaderNotebook2;

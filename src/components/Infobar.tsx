import { useState } from "react";

import InfoNavBar from "./InfoNavBar";

function Infobar() {
  return (
    <div className="bg-bgThemeGray h-auto w-full max-w-[700px] max-h-screen border-y-2 border-l-2 border-borderDarkerGreenColor rounded-l-lg">
      {/* Navbar */}
      <InfoNavBar />

      {/* Body */}
      <div></div>
    </div>
  );
}

export default Infobar;

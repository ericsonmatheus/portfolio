import React, { useState } from "react";
import "./index.css";

import Home from "./Home/Home";
import Sidebar from "./Sidebar/Sidebar";
import Knowledge from "./Knowledge/Knowledge";
import Project from "./Project/Project";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";

function Index() {

  const [showMenu, setShowMenu] = useState(false)

  const handleShowMenu = (currentMenu) => {
    currentMenu ? setShowMenu(false) : setShowMenu(true)
  }

  return (
    <div className={`container ${showMenu ? 'show-menu' : ''}`}>
      <div className="hamburguer" onClick={e => handleShowMenu(showMenu)}>
        <div className="line" id="line1"></div>
        <div className="line" id="line2"></div>
        <div className="line" id="line3"></div>
        <span>Close</span>
      </div>

      < Home />

      < Sidebar />

      < Knowledge />

      < Project />

      < Contact />

      < Footer />

    </div>
  );
}

export default Index;
import React, { useState } from "react";
import "./Header.css";
import artventurebg from "../../assets/artventurebg.png";
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="logo">
        <img src={artventurebg} alt="Artventure Logo"
        style={{
          width: "200px",
        }}
        />
      </div>

      {/* <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button> */}

      <nav className={`nav ${menuOpen ? "open" : ""}`}>
        {/* <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/faqs">FAQs</a></li>
          <li><a href="/contact">Contact</a></li>

        </ul> */}
      </nav>
    </header>
  );
};

export default Header;

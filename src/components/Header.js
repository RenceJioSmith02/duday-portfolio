import React, { useState } from "react";
import { smoothScroll } from "../utils/scroll";

export default function Header() {
  const [active, setActive] = useState("home");

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setActive(id);
    smoothScroll(e, id);
  };

  return (
    <header>
      <nav className="navbar navbar-expand-lg fixed-top py-3 custom-navbar">
        <div className="container d-flex justify-content-between align-items-center header-container">
          {/* Left - Brand */}
          <div className="header-col">
            <a
              className="navbar-brand fw-bold text-light"
              href="#"
              onClick={(e) => handleNavClick(e, "home")}
            >
              MyPortfolio
            </a>
          </div>

          {/* Center - Nav Links */}
          <div className="header-col d-none d-lg-flex justify-content-center">
            <ul className="navbar-nav gap-4">
              <li className="nav-item">
                <a
                  className={`nav-link ${active === "home" ? "active" : ""}`}
                  href="#"
                  onClick={(e) => handleNavClick(e, "home")}
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${active === "about" ? "active" : ""}`}
                  href="#"
                  onClick={(e) => handleNavClick(e, "about")}
                >
                  About
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${
                    active === "projects" ? "active" : ""
                  }`}
                  href="#"
                  onClick={(e) => handleNavClick(e, "projects")}
                >
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${active === "contact" ? "active" : ""}`}
                  href="#"
                  onClick={(e) => handleNavClick(e, "contact")}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

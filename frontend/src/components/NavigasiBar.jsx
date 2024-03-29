import Popup from "./Popup";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Import Bootstrap JS
import "../style/style.css";
import { NavLink } from "react-router-dom";


const NavigasiBar = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handlePopupToggle = () => {
    setShowPopup(!showPopup); // Toggle the visibility
  };

  return (
    <>
      <nav className="navbar sticky-top navbar-expand-lg px-3">
        <div className="container-fluid align-self-center">
        <h3> <NavLink to="/" className="navbar-brand fw-bold">Mikro.id
          </NavLink></h3>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02"
                  aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse p-3 bg-white rounded-3" id="navbarTogglerDemo02">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a href="/" className="nav-link" onClick={(e) => { e.preventDefault(); handlePopupToggle(); }}>Masuk/Daftar</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {showPopup && <Popup />}
    </>
  );
}

export default NavigasiBar;

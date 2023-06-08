import React from "react";
import { Link } from "react-router-dom";
import './pro.css';

function Profil({ toggleDropdown, isDropdownOpen }) {
  return (
    <div className="Sidebar">
        <div className="image-container">
            <img src="/photos/menu_icon.gif" alt="menu" className="menu-image"/>
        </div>
      <ul>
        <li>
         <button>
          <Link to="/">Home</Link>
        </button> 
        </li>
        <li>
          <button onClick={toggleDropdown}>Trainnig_results</button>
          {isDropdownOpen && (
            <ul className="Dropdown">
              <li>
                <Link to="/initial">Initial</Link>
              </li>
              <li>
                <Link to="/final">Final</Link>
              </li>
            </ul>
          )}
        </li>
        <li>
          <button onClick={toggleDropdown}>Features</button>
          {isDropdownOpen && (
            <ul className="Dropdown">
              <li>
                <Link to="/Corrdt">NSL_KDD</Link>
              </li>
              <li>
                <Link to="/Rfchi2">UNSW_NB15</Link>
              </li>
              {/* <li>
                <Link to="/Rfenb">Rfenb</Link>
              </li> */}
            </ul>
          )}
        </li>
        <li>
          <button onClick={toggleDropdown}>Improvements</button>
          {isDropdownOpen && (
            <ul className="Dropdown">
              <li>
                <Link to="/Improvement">NSL_KDD</Link>
              </li>
              <li>
                <Link to="/Rfenb">UNSW_NB15</Link>
              </li>
              {/* <li>
                <Link to="/Rfenb">Rfenb</Link>
              </li> */}
            </ul>
          )}
        </li>
        <li>
          <button onClick={toggleDropdown}>Statistics</button>
          {isDropdownOpen && (
            <ul className="Dropdown">
              <li>
                <Link to="/Graphs1">NSL_KDD</Link>
              </li>
              <li>
                <Link to="/Graphs2">UNSW_NB15</Link>
              </li>
              {/* <li>
                <Link to="/Rfenb">Rfenb</Link>
              </li> */}
            </ul>
          )}
        </li>
        <li>
            <button>
          <Link to="/predict">Predict</Link>
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Profil;
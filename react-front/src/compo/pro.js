import React, { useState } from "react";
import { Link } from "react-router-dom";
import './pro.css';
import { FaHome, FaChartBar,  FaCog,FaChartArea,FaBalanceScale,FaUps } from 'react-icons/fa';


function Profil({ toggleDropdown, isDropdownOpen }) {
  const [isSidebarCollapsed, setSidebarCollapsed] = useState(true);

  const handleMouseEnter = () => {
    setSidebarCollapsed(false);
  };

  const handleMouseLeave = () => {
    setSidebarCollapsed(true);
  };
  return (
    <div  className={`Sidebar ${isSidebarCollapsed ? 'collapsed' : ''}`}
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}>
        <div className="image-container">
            <img src="/photos/menu_icon.gif" alt="menu" className="menu-image"/>
        </div>
      <ul>
        <li>
         <button>
         <Link to="/">
          <FaHome/>
    <span>Home</span>
  </Link>
        </button> 
        </li>
        <li>
          <button onClick={toggleDropdown}><FaChartArea/><span>Trainnig_results</span></button>
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
          <button onClick={toggleDropdown}><FaCog/><span>Features</span></button>
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
          <button onClick={toggleDropdown}><FaUps/><span>Improvements</span></button>
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
          <button onClick={toggleDropdown}><FaChartBar/><span>Statistics</span></button>
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
          <Link to="/predict"><FaBalanceScale/><span>Predict</span></Link>
          </button>
        </li>
      </ul>
      
    </div>
  );
}

export default Profil;
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Profil from "./pro";
import 'bootstrap/dist/css/bootstrap.min.css';
import './home.css';


const Home = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
 

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
 

  const [switch1, setSwitch1] = useState(false);
  const [switch2, setSwitch2] = useState(false);

  const handleSwitch1Click = () => {
    setSwitch1(!switch1);
    setSwitch2(false);
  };

  const handleSwitch2Click = () => {
    setSwitch2(!switch2);
    setSwitch1(false);
  };

  return (
    <div className="Home">
       <Profil toggleDropdown={toggleDropdown} isDropdownOpen={isDropdownOpen}/> 
      <div className="content">
        <div className="switch-container">
          <button
            className={`switch-button ${switch1 ? 'active' : ''}`}
            onClick={handleSwitch1Click}
          >
            NSL_KDD
          </button>
          <button
            className={`switch-button ${switch2 ? 'active' : ''}`}
            onClick={handleSwitch2Click}
          >
            UNSW_NB15
          </button>
        </div>
        {switch1 && (
          <><div className="description-container">
                      <h2>Description</h2>
                      <p>The NSL-KDD dataset is a benchmark dataset for network intrusion
                          detection. It offers a realistic representation of network traffic
                          and contains labeled instances of normal connections and various
                          attack types, including DoS, U2R, R2L, and Probing. The dataset
                          is divided into training and testing sets, and it provides a wide
                          range of features to describe each network connection. However,
                          it suffers from class imbalance, where normal connections outnumber
                          specific attacks. The NSL-KDD dataset has been widely used in research
                          to develop and evaluate intrusion detection systems, although it may not
                          fully reflect the current threat landscape as it was created in 2009.</p>
                  </div><div className="photo-container">
                          <div className="photo">
                              <h3 className="photo-title">Before Balancing</h3>
                              <img src="/photos/before.png" alt="beforebalancing" />
                          </div>
                          <div className="photo">
                              <h3 className="photo-title">After Balancing</h3>
                              <img src="/photos/after.png" alt="afterbalancing" />
                          </div>

                          <div className="photo">
                              <h3 className="photo-title">Chi2 feauture selection</h3>
                              <img src="/photos/chi2.png" alt="chi2" />
                          </div>
                          <div className="photo">
                              <h3 className="photo-title">protocols</h3>
                              <img src="/photos/protocole.png" alt="afterbalancing" />
                          </div>
                          <div className="photo">
                              <h3 className="photo-title">Correlation Matrix</h3>
                              <img src="/photos/corr.png" alt="corr" />
                          </div>
                          <div className="photo">
                              <h3 className="photo-title">confusion Matrix</h3>
                              <img src="/photos/confusion_matrix.png" alt="confusion Matrix" />
                          </div>
                      </div>
               </>
        )}
        {switch2 && (
          <><div className="description-container">
                      <h2>Description</h2>
                      <p>The UNSW dataset is a widely used network traffic dataset for intrusion
                          detection and cybersecurity research. It contains real-world network connections,
                          including normal and various attack types. The dataset covers known and unknown attacks,
                          and it offers a rich set of features to describe each connection. It includes over 49 features,
                          capturing various aspects of network traffic behavior. The UNSW dataset is valuable for
                          evaluating
                          intrusion detection systems against diverse threats.</p>
                  </div><div className="photo-container">
                          <div className="photo">
                              <h3 className="photo-title">Initial</h3>
                              <img src="/photos/metrics_df_init.png" alt="initial" />
                          </div>
                          <div className="photo">
                              <h3 className="photo-title">Normalization</h3>
                              <img src="/photos/metrics_df_normalization.png" alt="normalization" />
                          </div>
                          <div className="photo">
                              <h3 className="photo-title">RFE Feauture selection</h3>
                              <img src="/photos/metrics_df_Rf_feature_selection.png" alt="RFE" />
                          </div>
                          <div className="photo">
                <h3 className="photo-title">RFE confusion Matrix</h3>
                <img src="/photos/metrics_df_normalizationRF.png" alt="RFE" />
              </div>
              <div className="photo">
                <h3 className="photo-title">Before Balancing</h3>
                <img src="/photos/1.PNG" alt="beforebalancing" />
              </div>
              <div className="photo">
                <h3 className="photo-title">After Balancing</h3>
                <img src="/photos/2.PNG" alt="afterbalancing" />
              </div>
                      </div>
                 
                      </>
        )}
      </div>
    </div>
  );
};

export default Home;
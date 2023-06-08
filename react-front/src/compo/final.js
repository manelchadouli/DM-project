import React, { useState } from 'react';
import Profil from "./pro";
import './home.css';
import './pro.css';
import './final.css'

const Final= ()=>{
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
  

    return(
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
          <div className="description-container">
            <h2>After Normalisation Results</h2>
            <table>
  <thead>
    <tr>
      <th>Model</th>
      <th>Accuracy</th>
      <th>Precision</th>
      <th>Recall</th>
      <th>F1 Score</th>
      <th>False alarm</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>DecisionTreeClassifier</td>
      <td>0.950139733</td>
      <td>0.960492116</td>
      <td>0.860847958</td>
      <td>0.907944308</td>
      <td>0,014344262</td>
    </tr>
    <tr>
      <td>RandomForestClassifier</td>
      <td>0.934746928</td>
      <td>0.957795798</td>
      <td>0.807112906</td>
      <td>0.876021913</td>
      <td>0,014282166</td>
    </tr>
    <tr>
      <td>RandomForestClassifier With parameters</td>
      <td>0.940025729</td>
      <td>0.959032666</td>
      <td>0.825283429</td>
      <td>0.887145242</td>
      <td>0,014157973</td>
    </tr>
    <tr>
      <td>LogisticRegression</td>
      <td>0.943397063</td>
      <td>0.948722406</td>
      <td>0.84764715</td>
      <td>0.895341207</td>
      <td>0,018256334</td>
    </tr>
    <tr>
      <td>Naive Bayes Classifier</td>
      <td>0.810451138</td>
      <td>0.618179834</td>
      <td>0.879794999</td>
      <td>0.726142409</td>
      <td>0,2174615</td>
    </tr>
  </tbody>
</table>
          </div>
        )}
        {switch2 && (
          <div className="description-container">
           <h2>After Normalisation Results</h2>
           <table>
  <thead>
    <tr>
      <th>Model</th>
      <th>Accuracy</th>
      <th>Precision</th>
      <th>Recall</th>
      <th>F1 Score</th>
      <th>False Alarm Rate</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>RandomForestClassifier</td>
      <td>0.971852916</td>
      <td>0.185990888</td>
      <td>0.998471415</td>
      <td>0.31357112</td>
      
      <td>0.028319587</td>
    </tr>
    <tr>
      <td>DecisionTreeClassifier</td>
      <td>0.971347021</td>
      <td>0.181268712</td>
      <td>0.981045552</td>
      <td>0.305997902</td>
   
      <td>0.028715831</td>
    </tr>
    <tr>
      <td>LogisticRegression</td>
      <td>0.943306234</td>
      <td>0.101193452</td>
      <td>0.990217059</td>
      <td>0.183621985</td>
      
      <td>0.056997775</td>
    </tr>
    <tr>
      <td>K-Nearest Neighbors</td>
      <td>0.962315702</td>
      <td>0.145010511</td>
      <td>0.99113421</td>
      <td>0.253004526</td>
    
      <td>0.037871058</td>
    </tr>
    <tr>
      <td>KNNWithBestParam</td>
      <td>0.973506427</td>
      <td>0.184464817</td>
      <td>0.910424946</td>
      <td>0.306773114</td>
      
      <td>0.026084769</td>
    </tr>
    <tr>
      <td>Naive Bayes Classifier</td>
      <td>0.938477589</td>
      <td>0.092974545</td>
      <td>0.977071232</td>
      <td>0.169792275</td>
    
      <td>0.06177252</td>
    </tr>
    <tr>
      <td>SVM</td>
      <td>0.949347454</td>
      <td>0.112674599</td>
      <td>0.998777132</td>
      <td>0.202504184</td>
      
      <td>0.050972879</td>
    </tr>
    <tr>
      <td>SVMWithBestParam</td>
      <td>0.961748784</td>
      <td>0.143606933</td>
      <td>0.995414246</td>
      <td>0.251002158</td>
      
      <td>0.038469387</td>
    </tr>
  </tbody>
</table>


          </div>
        )}
      </div>
    </div>)

}
export default Final;
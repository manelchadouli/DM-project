import React, { useState } from 'react';
import Profil from "./pro";
import './home.css';
import './pro.css';
// import './initial.css';
import 'bootstrap/dist/css/bootstrap.css';

const Initial = ()=>{
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
            <h2>Before Normalisation Results</h2>
            <table>
                <thead>
                    <tr>
                        <th scope="col">Model</th>
                        <th scope="col">Accuracy</th>
                        <th scope="col">Precision</th>
                        <th scope="col">Recall</th>
                        <th scope="col">F1 Score</th>
                        <th scope="col">False alarm</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">DecisionTreeClassifier</th>
                        <td>0.949917935</td>
                        <td>0.959660665</td>
                        <td>0.860847958</td>
                        <td>0.907572657</td>
                        <td>0,014468455</td>
                    </tr>
                    <tr>
                        <th scope="row">RandomForestClassifier</th>
                        <td>0.943308344</td>
                        <td>0.959082014</td>
                        <td>0.837241808</td>
                        <td>0.894029851</td>
                        <td>0,014282166</td>
                    </tr>
                    <tr>
                        <th scope="row">RandomForestClassifier With parameters</th>
                        <td>0.942332431</td>
                        <td>0.95924933</td>
                        <td>0.833514521</td>
                        <td>0.891972744</td>
                        <td>0,014157973</td>
                    </tr>
                    <tr>
                        <th scope="row">LogisticRegression</th>
                        <td>0.932085348</td>
                        <td>0.926931106</td>
                        <td>0.82745768</td>
                        <td>0.874374333</td>
                        <td>0,026080477</td>
                    </tr>
                    <tr>
                        <th scope="row">Naive Bayes Classifier</th>
                        <td>0.519096837</td>
                        <td>0.365151329</td>
                        <td>0.925609567</td>
                        <td>0.523702825</td>
                        <td>0,643442623</td>
                    </tr>
                </tbody>
            </table>
          </div>
        )}
        {switch2 && (
          <div className="description-container">
           <h2>Before Normalisation Results</h2>
           <table>
  <thead>
    <tr>
      <th scope='col'>Model</th>
      <th scope='col'>Accuracy</th>
      <th scope='col'>Precision</th>
      <th scope='col'>Recall</th>
      <th scope='col'>F1 Score</th>
      <th scope='col'>False Alarm Rate</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope='row'>RandomForestClassifier</th>
      <td>0.971913939</td>
      <td>0.186284019</td>
      <td>0.998165699</td>
      <td>0.313972497</td>
      <td>0.028256188</td>
    </tr>
    <tr>
      <th scope='row'>DecisionTreeClassifier</th>
      <td>0.971398201</td>
      <td>0.181571356</td>
      <td>0.981351269</td>
      <td>0.306443914</td>
      <td>0.028666301</td>
    </tr>
    <tr>
      <th scope='row'>LogisticRegression</th>
      <td>0.754252869</td>
      <td>0.023082657</td>
      <td>0.899419138</td>
      <td>0.045010174</td>
      <td>0.246687892</td>
    </tr>
    <tr>
      <th scope='row'>K-Nearest Neighbors</th>
      <td>0.928280939</td>
      <td>0.077788812</td>
      <td>0.933965148</td>
      <td>0.143616021</td>
      <td>0.071755898</td>
    </tr>
    <tr>
      <th scope='row'>Naive Bayes Classifier</th>
      <td>0.753457609</td>
      <td>0.021325024</td>
      <td>0.830632834</td>
      <td>0.041582492</td>
      <td>0.247042531</td>
    </tr>
    <tr>
      <th scope='row'>SVM</th>
      <td>0.57737643</td>
      <td>0.012299431</td>
      <td>0.815041272</td>
      <td>0.024233169</td>
      <td>0.424163776</td>
    </tr>
  </tbody>
</table>

          </div>
        )}
      </div>
    </div>

   

    )

}
export default Initial;
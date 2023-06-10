import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Profil from "./pro";
import 'bootstrap/dist/css/bootstrap.min.css';
import './home.css';
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from 'recharts';
import { LineChart, Line } from 'recharts';


const Home = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
 

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const data4 = [
    { label: '0', value: 2 },
    { label: '1', value: 0.05 },
  ];
  const data5 = [
    { label: '0', value: 13000 },
    { label: '1', value: 13000 },
  ];

  const data6 = [
    { classifier: 'RandomForestClassifier', Accuracy: 0.971913939, Precision: 0.186284019, Recall: 0.998165699, F1Score: 0.313972497, FalseAlarmRate: 0.028256188 },
    { classifier: 'DecisionTreeClassifier', Accuracy: 0.971398201, Precision: 0.181571356, Recall: 0.981351269, F1Score: 0.306443914, FalseAlarmRate: 0.028666301 },
    { classifier: 'LogisticRegression', Accuracy: 0.754252869, Precision: 0.023082657, Recall: 0.899419138, F1Score: 0.045010174, FalseAlarmRate: 0.246687892 },
    { classifier: 'K-Nearest Neighbors', Accuracy: 0.928280939, Precision: 0.077788812, Recall: 0.933965148, F1Score: 0.143616021, FalseAlarmRate: 0.071755898 },
    { classifier: 'Naive Bayes Classifier', Accuracy: 0.753457609, Precision: 0.021325024, Recall: 0.830632834, F1Score: 0.041582492, FalseAlarmRate: 0.247042531 },
    { classifier: 'SVM', Accuracy: 0.57737643, Precision: 0.012299431, Recall: 0.815041272, F1Score: 0.024233169, FalseAlarmRate: 0.424163776 },
  ];
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
                              {/* <h3 className="photo-title">Before Balancing</h3> */}
                              <img src="/photos/flags.png" alt="beforebalancing" />
                          </div>
                          <div className="photo">
                              {/* <h3 className="photo-title">After Balancing</h3> */}
                              <img src="/photos/labeldestrubution.png" alt="afterbalancing" />
                          </div>

                          <div className="photo">
                              {/* <h3 className="photo-title">Chi2 feauture selection</h3> */}
                              <img src="/photos/chi2.png" alt="chi2" />
                          </div>
                          <div className="photo">
                              {/* <h3 className="photo-title">protocols</h3> */}
                              <img src="/photos/protocole.png" alt="afterbalancing" />
                          </div>
                          <div className="photo">
                              {/* <h3 className="photo-title">Correlation Matrix</h3> */}
                              <img src="/photos/corr.png" alt="corr" />
                          </div>
                          <div className="photo">
                              {/* <h3 className="photo-title">confusion Matrix</h3> */}
                              <img src="/photos/confusion_matrix.png" alt="confusion Matrix" />
                          </div>
                      </div>
               </>
        )}
        {switch2 && (
          <>


<div className='graphs'>
          <div className='container barchart-container'>
            <div className='flags'>
              <div className='barchart'>
              <BarChart width={400} height={300} data={data4}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="label" />
      <YAxis domain={[0, 2]} />
      <Tooltip />
      <Legend />
      <Bar dataKey="value" fill="#8884d8" />
    </BarChart>
    <BarChart width={400} height={300} data={data5}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="label" />
      <YAxis domain={[0, 14000]} />
      <Tooltip />
      <Legend />
      <Bar dataKey="value" fill="#8884d8" />
    </BarChart> 
    
              </div>
            </div>
          </div>
          <div className='container linechart-container'>
            <div className='models'>
           
    <LineChart width={600} height={400} data={data6}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="classifier" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="Accuracy" stroke="#8884d8" />
      <Line type="monotone" dataKey="Precision" stroke="#82ca9d" />
      <Line type="monotone" dataKey="Recall" stroke="#ffc658" />
      <Line type="monotone" dataKey="F1Score" stroke="#ff7300" />
      <Line type="monotone" dataKey="FalseAlarmRate" stroke="#a4de6c" />
    </LineChart>
            </div>
          </div>
        </div>
                 
                      </>
        )}
      </div>
    </div>
  );
};

export default Home;
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Profil from "./pro";
import 'bootstrap/dist/css/bootstrap.min.css';
import './home.css';
import {LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Cell } from 'recharts';






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
  const data = [
    { type: 'SF', count: 78000, color: '#4e4cff'},
    { type: 'S0', count: 30500, color: '#DA0A15' },
    { type: 'REJ', count: 10000, color: '#0086b3' },
    { type: 'RSTR ', count: 5000, color: '#00a6b3' },
    { type: 'RSTO', count: 3700,color: '#6a3d9a' },
    { type: 'S1', count: 1000,color: '#4e79a7' },
    { type: 'SH', count: 500,color: '#50E0BC' },
    { type: 'S2', count: 400,color: '#C51F64' },
    { type: 'RSTOS0', count: 300,color: '#A9DF45' },
    { type: 'S3', count: 200,color: '#2B08F1' },
    { type: 'OTH', count: 100,color: '#864EA7'},
    // ... and so on
  ];

  // const colorPalette = [, '#3352cc', '#0066b3', '#0086b3', '#00a6b3', '#00c6b3', '#00e6b3', '#00ffb3', '#1affb3', '#4cffb3', '#7dffcc'];
  const MyBarChart = () => {
    return (
      <BarChart width={280} height={230} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="type" label={{ value: 'Type', position: 'insideBottom', offset: -10 }} />
        <YAxis label={{ value: 'Count', angle: -90, position: 'insideLeft' }} />
        <Tooltip />
        <Legend />
        <Bar dataKey="count">
          {
            data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))
          }
        </Bar>
      </BarChart>
    );
  };
  const data1 = [
    { protocol_type: 'tcp', count: 100000,color:'#8884d8' },
    { protocol_type: 'udp', count: 18000 ,color:'#f03b20"'},
    { protocol_type: 'icmp', count: 15000 ,color:'#ffc658' },
    // ... and so on
  ];
  const MyBarChart1 = () => {
    
      return (
        <BarChart width={280} height={230} data={data1}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="protocol_type" label={{ value: 'protocol_type', position: 'insideBottom', offset: -10 }} />
          <YAxis label={{ value: 'Count', angle: -90, position: 'insideLeft' }} />
          <Tooltip />
          <Legend />
          <Bar dataKey="count">
            {
              data1.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))
            }
          </Bar>
        </BarChart>
      );
    };
    const data2 = [
      {
        name: 'DecisionTreeClassifier',
        Accuracy: 0.950051,
        Precision: 0.960000,
        Recall: 0.861003,
        F1Score: 0.907811,
        false_alarm_rate: 0.014344,
      },
      {
        name: 'RandomForestClassifier',
        Accuracy: 0.940647,
        Precision: 0.958641,
        Recall: 0.827924,
        F1Score: 0.888500,
        false_alarm_rate: 0.014282,
      },
      {
        name: 'RandomForestClassifier With parameters',
        Accuracy: 0.941756,
        Precision: 0.959154,
        Recall: 0.831496,
        F1Score: 0.890774,
        false_alarm_rate: 0.014158,
      },
      {
        name: 'LogisticRegression',
        Accuracy: 0.943530,
        Precision: 0.948905,
        Recall: 0.847958,
        F1Score: 0.895596,
        false_alarm_rate: 0.018256,
      },
      {
        name: 'Naive Bayes Classifier',
        Accuracy: 0.810318,
        Precision: 0.617978,
        Recall: 0.879795,
        F1Score: 0.726003,
        false_alarm_rate: 0.217462,
      },
    ];
    
    const LineChartExample = () => {
      return (
        <LineChart width={500} height={400} data={data2}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" tick={{ fontSize: 12 }} interval={0} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Accuracy" stroke="#8884d8" />
          <Line type="monotone" dataKey="Precision" stroke="#82ca9d" />
          <Line type="monotone" dataKey="Recall" stroke="#ffc658" />
          <Line type="monotone" dataKey="F1Score" stroke="#f03b20" />
          <Line type="monotone" dataKey="false_alarm_rate" stroke="#6a3d9a" />
          <label
        content={({ value }) => value}
        position="insideBottom"
        offset={-5}
        fill="#888"
        fontSize={12}
      />
        </LineChart>
      );
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
          <>  
       <div className='graphs'>
          <div className='container barchart-container'>
            <div className='flags'>
              <div className='barchart'>
                <MyBarChart />
                <MyBarChart1 />
              </div>
            </div>
          </div>
          <div className='container linechart-container'>
            <div className='models'>
              <LineChartExample />
            </div>
          </div>
        </div>
        
        
               </>
        )}
        {switch2 && (
          <>  <div className='graphs'>
          <div className='container barchart-container'>
            <div className='flags'>
              <div className='barchart'>
              <BarChart width={280} height={230} data={data4}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="label" />
      <YAxis domain={[0, 2]} />
      <Tooltip />
      <Legend />
      <Bar dataKey="value" fill="#8884d8" />
    </BarChart>
    <BarChart width={280} height={230} data={data5}>
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
           
    <LineChart width={500} height={400} data={data6}>
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
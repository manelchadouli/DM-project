import React, { useState } from 'react';
import Profil from "./pro";
import './pro.css';
import './Graphs.css'
import 'bootstrap/dist/css/bootstrap.css';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';


const Graphs1 = ()=>{
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
      setIsDropdownOpen(!isDropdownOpen);
    };
    const data = [
      { name: 'Initial State', logistic: 0.932085348, naiveBayes: 0.519096837 },
      { name: 'RFE Step', logistic: 0.945481968 , naiveBayes: 0.902320011},
      { name: 'Logistic Regression', logistic: 0.939759570598412, naiveBayes: 0.878010912478375 },
    ];
    
    const LineChartExample = () => {
      return (
        <LineChart width={700} height={300} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis label={{ value: 'Accuracy', angle: -90, position: 'insideLeft' }} />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="logistic" name="Logistic Regression" stroke="#f03b20" />
          <Line type="monotone" dataKey="naiveBayes" name="Naive Bayes Classifier" stroke="#82ca9d" />
        </LineChart>
      );
    };
    const data1 = [
      { name: 'Initial State', logistic: 0.026080477, naiveBayes: 0.643442623  },
      { name: 'RFE Step', logistic: 0.014841033  , naiveBayes: 0.045702931 },
      { name: 'Logistic Regression', logistic: 0.021857923, naiveBayes: 0.092275211 },
    ];
    
    const LineChartExample1 = () => {
      return (
        <LineChart width={700} height={300} data={data1}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis label={{ value: 'False alarm', angle: -90, position: 'insideLeft' }} />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="logistic" name="Logistic Regression" stroke="#f03b20" />
          <Line type="monotone" dataKey="naiveBayes" name="Naive Bayes Classifier" stroke="#82ca9d" />
        </LineChart>
      );
    };
    const data2 = [
      { name: 'Initial State', logistic: 0.874374333, naiveBayes: 0.523702825  },
      { name: 'RFE Step', logistic: 0.898655892  , naiveBayes:  0.818735594 },
      { name: 'Logistic Regression', logistic: 0.888907068, naiveBayes:0.790076336 },
    ];
    
    const LineChartExample2 = () => {
      return (
        <LineChart width={700} height={300} data={data2}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis label={{ value: 'f1-score', angle: -90, position: 'insideLeft' }} />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="logistic" name="Logistic Regression" stroke="#f03b20" />
          <Line type="monotone" dataKey="naiveBayes" name="Naive Bayes Classifier" stroke="#82ca9d" />
        </LineChart>
      );
    };
    const data3 = [
      { name: 'Initial State', logistic:0.82745768, naiveBayes: 0.925609567  },
      { name: 'RFE Step', logistic: 0.846249418   , naiveBayes: 0.772324895 },
      { name: 'Logistic Regression', logistic:  0.84376456, naiveBayes: 0.803696226},
    ];
    
    const LineChartExample3 = () => {
      return (
        <LineChart width={700} height={300} data={data3}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis label={{ value: 'Recall', angle: -90, position: 'insideLeft' }} />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="logistic" name="Logistic Regression" stroke="#f03b20" />
          <Line type="monotone" dataKey="naiveBayes" name="Naive Bayes Classifier" stroke="#82ca9d" />
        </LineChart>
      );
    };
    const data4 = [
      { name: 'Initial State', logistic:0.926931106, naiveBayes:0.365151329  },
      { name: 'RFE Step', logistic: 0.957981716   , naiveBayes: 0.87108075 },
      { name: 'Logistic Regression', logistic:  0.939152982, naiveBayes: 0.776910374},
    ];
    
    const LineChartExample4 = () => {
      return (
        <LineChart width={700} height={300} data={data4}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis label={{ value: 'Precision', angle: -90, position: 'insideLeft' }} />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="logistic" name="Logistic Regression" stroke="#f03b20" />
          <Line type="monotone" dataKey="naiveBayes" name="Naive Bayes Classifier" stroke="#82ca9d" />
        </LineChart>
      );
    };



    return(
        <div >
              <Profil toggleDropdown={toggleDropdown} isDropdownOpen={isDropdownOpen}/> 
           {/* <h1>NSL_KDD Imporvements</h1> */}
           <div  className='Nsl_Imp'>
          
           <LineChartExample/>
           <LineChartExample1/>
           <LineChartExample2/>
           <LineChartExample3/>
           <LineChartExample4/>
             
           </div>
           

         </div>


    )

}
export default Graphs1;
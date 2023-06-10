import React, { useState } from 'react';
import Profil from "./pro";
// import './Graph2.css';
import './pro.css';
import './Graphs.css'
import 'bootstrap/dist/css/bootstrap.css';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { BarChart, Bar } from 'recharts'
import { ResponsiveContainer } from 'recharts';

const Graphs2 = ()=>{
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
      setIsDropdownOpen(!isDropdownOpen);
    };


    const data3 = [
      {
        Metric: 'Accuracy',
        KNN: 0.048022677,
        SVM: 0.384372355,
        'Naive Bayes': 0.197606346,
        'Logistic Regression': 0.189053365,
      },
      {
        Metric: 'Precision',
        KNN: 0.094962215,
        SVM: 0.131307503,
        'Naive Bayes': 0.088121772,
        'Logistic Regression': 0.078110795,
      },
      {
        Metric: 'Recall',
        KNN: 0.226536227,
        SVM: 0.180372975,
        'Naive Bayes': 0.094160807,
        'Logistic Regression': 0.090797921,
      },
      {
        Metric: 'F1 Score',
        KNN: 0.134075087,
        SVM: 0.226768989,
        'Naive Bayes': 0.154147046,
        'Logistic Regression': 0.138611811,
      },
      {
        Metric: 'False Alarm Rate',
        KNN: 0.049801977,
        SVM: 0.385694389,
        'Naive Bayes': 0.198276733,
        'Logistic Regression': 0.189690117,
      },
    ];

    const data = [
      {
        Step: 'Initial State',
        SVM: 0.57737643,
        'SVM with Param': 0.57737643,
        KNN: 0.928280939,
        'KNN with Param': 0.928280939,
        'Naive Bayes': 0.753457609,
        'Logistic Regression': 0.754252869,
      },
      {
        Step: 'After Normalization',
        SVM: 0.949347454,
        'SVM with Param': 0.961748784,
        KNN: 0.962315702,
        'KNN with Param': 0.973506427,
        'Naive Bayes': 0.938477589,
        'Logistic Regression': 0.943306234,
      },
      {
        Step: 'Random Forest Selection',
        SVM: 0.949823822,
        'SVM with Param': 0.955599299,
        KNN: 0.965152261,
        'KNN with Param': 0.975443397,
        'Naive Bayes': 0.944430228,
        'Logistic Regression': 0.940762977,
      },
      {
        Step: 'Correlation Columns',
        SVM: 0.949439972,
        'SVM with Param': 0.961573591,
        KNN: 0.962333419,
        'KNN with Param': 0.973488711,
        'Naive Bayes': 0.93500128,
        'Logistic Regression': 0.943276707,
      },
      {
        Step: 'Correlation Label',
        SVM: 0.94846755,
        'SVM with Param': 0.958784276,
        KNN: 0.960790142,
        'KNN with Param': 0.971839137,
        'Naive Bayes': 0.951063955,
        'Logistic Regression': 0.938410661,
      },
      {
        Step: 'Mutual Info Classifier',
        SVM: 0.950880888,
        'SVM with Param': 0.951178126,
        KNN: 0.963752682,
        'KNN with Param': 0.976303616,
        'Naive Bayes': 0.864118817,
        'Logistic Regression': 0.939987402,
      },
      {
        Step: 'RFE',
        SVM: 0.950396646,
        'SVM with Param': 0.958321687,
        KNN: 0.96575658,
        'KNN with Param': 0.975848901,
        'Naive Bayes': 0.944971556,
        'Logistic Regression': 0.940934234,
      },
      {
        Step: 'Chi2',
        SVM: 0.951209622,
        'SVM with Param': 0.953274542,
        KNN: 0.964829432,
        'KNN with Param': 0.976205193,
        'Naive Bayes': 0.889582882,
        'Logistic Regression': 0.869469105,
      },
    ];


    const data2 = [
      {
        Step: 'Initial State',
        SVM: 0.424163776,
        'SVM with Param': 0.424163776,
        KNN: 0.071755898,
        'KNN with Param': 0.071755898,
        'Naive Bayes': 0.247042531,
        'Logistic Regression': 0.246687892,
      },
      {
        Step: 'After Normalization',
        SVM: 0.050972879,
        'SVM with Param': 0.038469387,
        KNN: 0.037871058,
        'KNN with Param': 0.026084769,
        'Naive Bayes': 0.06177252,
        'Logistic Regression': 0.056997775,
      },
      {
        Step: 'Random Forest Selection',
        SVM: 0.050493423,
        'SVM with Param': 0.044674574,
        KNN: 0.034590155,
        'KNN with Param': 0.022445264,
        'Naive Bayes': 0.055775361,
        'Logistic Regression': 0.059543645,
      },
      {
        Step: 'Correlation Columns',
        SVM: 0.050879762,
        'SVM with Param': 0.038643735,
        KNN: 0.037853227,
        'KNN with Param': 0.026096656,
        'Naive Bayes': 0.065289189,
        'Logistic Regression': 0.057025512,
      },
      {
        Step: 'Correlation Label',
        SVM: 0.051858485,
        'SVM with Param': 0.041461032,
        KNN: 0.039376787,
        'KNN with Param': 0.027754939,
        'Naive Bayes': 0.048765798,
        'Logistic Regression': 0.061867619,
      },
      {
        Step: 'Mutual Info Classifier',
        SVM: 0.049346296,
        'SVM with Param': 0.049070906,
        KNN: 0.035937385,
        'KNN with Param': 0.021953921,
        'Naive Bayes': 0.136640917,
        'Logistic Regression': 0.060243017,
      },
      {
        Step: 'RFE',
        SVM: 0.049914907,
        'SVM with Param': 0.04192662,
        KNN: 0.034409863,
        'KNN with Param': 0.023459649,
        'Naive Bayes': 0.055180995,
        'Logistic Regression': 0.059353448,
      },
      {
        Step: 'Chi2',
        SVM: 0.049033263,
        'SVM with Param': 0.046883637,
        KNN: 0.030403832,
        'KNN with Param': 0.018738397,
        'Naive Bayes': 0.10987659,
        'Logistic Regression': 0.130657627,
      },
    ];
    
    // Set the 'Step' column as the index for easier plotting
    const data2Indexed = data2.map((item) => ({
      ...item,
      index: item.Step,
    }));
    
    // Plot the improvement of SVM and SVM with Param across all steps
    const colors = ['#8884d8', '#82ca9d', '#ffc658', '#8dd1e1', '#a4de6c', '#d0ed57'];
    const steps = data2.map((item) => item.Step);
    
      
    return(
      <div className="container">
         <Profil toggleDropdown={toggleDropdown} isDropdownOpen={isDropdownOpen}/>
      
      <div className="chart-container">
        
         
      <div className="chart">
      <ResponsiveContainer width={700} height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="Step" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="SVM" stroke="#8884d8" />
          <Line type="monotone" dataKey="SVM with Param" stroke="#82ca9d" />
      <Line type="monotone" dataKey="KNN" stroke="#ff7300" />
      <Line type="monotone" dataKey="KNN with Param" stroke="#ffc658" />
      <Line type="monotone" dataKey="Naive Bayes" stroke="#ff00ff" />
      <Line type="monotone" dataKey="Logistic Regression" stroke="#00ff00" />
      </LineChart>
      </ResponsiveContainer>
    </div>
    <div className="chart">
     <ResponsiveContainer width={700}  height={300}>
        <LineChart data={data2}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="Step" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="KNN" stroke="#8884d8" />
          <Line type="monotone" dataKey="KNN with Param" stroke="#82ca9d" />
         
          <Line type="monotone" dataKey="Naive Bayes" stroke="#ffc658" />
          <Line type="monotone" dataKey="Logistic Regression" stroke="#00C49F" />
        </LineChart>
      </ResponsiveContainer>
  </div>
  <div className="chart">
  <ResponsiveContainer width={700} height={300}>
      <BarChart data={data3}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="Metric" />
        <YAxis/>
        <Tooltip />
        <Legend />
        <Bar dataKey="KNN" fill="#8884d8" />
        <Bar dataKey="SVM" fill="#82ca9d" />
        <Bar dataKey="Naive Bayes" fill="#ffc658" />
        <Bar dataKey="Logistic Regression" fill="#00C49F" />
      </BarChart>
    </ResponsiveContainer>
    </div>
                   </div>
                   </div>
    );

};
export default Graphs2;
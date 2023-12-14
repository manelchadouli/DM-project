import React, { useState } from 'react';
import axios from 'axios';
import { FaBackward } from 'react-icons/fa';
import { Link } from "react-router-dom";

const Predict = ()=>{

    // const [file, setFile] = useState(null);
    // const [predictions, setPredictions] = useState('');
    // const [fileName, setFileName] = useState('');
    // const [error, setError] = useState('');
  
    //////for second
  
    const [file1, setFile1] = useState(null);
    const [prediction1, setPrediction1] = useState('');
    const [fileName1, setFileName1] = useState('');
    const [error1, setError1] = useState('');
  
   
  
  
    
    ///////file of Unsw
     
    const handleFileUploadUnsw = (event) => {
      const selectedFile1 = event.target.files[0];
      if (selectedFile1) {
        setFile1(selectedFile1);
        setFileName1(selectedFile1.name); // Set the selected file name
        setError1('');
      } else {
        setError1('No file selected');
      }
    };

    
    //////end of file unsw 
  
    
 ///////////////Predict UNSW

const handlePredictUnsw = async () => {
  try {
    const formData1 = new FormData();
    formData1.append('file1', file1);


    const config1 = {
      headers: {
        'Content-Type': 'multipart/form-data' // Set the Content-Type header to 'application/json'
      }
    };

    console.log('Sending request to server');
    const response1 = await axios.post('http://localhost:5000/predict-Unsw', formData1, config1);
    console.log('Raw Response:', response1); // Log the raw response for debugging
    console.log('Response Data:', response1.data); // Log the response data for further inspection

    console.log('File:', file1);
    console.log('FileName:', fileName1);

    

    
      if (response1.data.error) {
        console.error(response1.data.error);
        setError1(response1.data.error);
        setPrediction1('');
      } else {
        const { data6 } = response1.data;
        const prediction1 = {
          predictions3: data6.predictions6,
        };
        
        setPrediction1(prediction1);
        setError1('');
      }
  } catch (error1) {
      console.error(error1);
      setError1('An error occurred. Please try again.');
      setPrediction1('');
    }
  
};
//////end handle UNSW predict
  

    return(
      
          <><div className='containers'>

        <div className='container-UNSW'>
          <h1>UNSW-NB15</h1>

          <div className='container-prediction'>

            {/* <input className='NSL-Input' type="file" accept=".json" onChange={handleFileUpload} />  */}
            <label className="label">
              <input type="file" accept=".json" onChange={handleFileUploadUnsw} />
              <span>{fileName1 || 'Select a file'}</span>
            </label>


            <button className='button-17' onClick={handlePredictUnsw}>Predict</button>
          </div>
         
         

{prediction1 && prediction1.predictions3 && (
  <div className='prediction-tableee'>
    <table className='prediction-table'>
      <thead>
        <tr>
          <th>Selector</th>
          <th>Classifier</th>
          <th>Prediction</th>
          <th>Alarm</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Correlation</td>
          <td>SVM</td>
          <td>
            {prediction1.predictions3.map((prediction, index) => (
              <li key={index}>
                {prediction === 'False Positive'
                  ? 'Attack'
                  : prediction === 'False Negative'
                  ? 'Normal'
                  : prediction === 'True Negative'
                  ? 'Normal'
                  : 'Attack'}
              </li>
            ))}
          </td>
          <td className="predict">
            {prediction1.predictions3.map((prediction, index) => (
              <li
                key={index}
                style={{ color: prediction === 'False Positive' ? '#ee4b4c' : '#26C6D0' }}
              >
                {prediction}
              </li>
            ))}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
)}



          {/* {error && <p>Error: {error}</p>} */}

        </div>

        {/* <link to='/' ></><span>go back</span></link> */}


      </div>
          {/* <Link to="/" className='goback'>
            <FaBackward />
            <span>Home</span>
          </Link> */}
        </>




    )
    

}
export default Predict;

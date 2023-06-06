import React, { useState } from 'react';
import axios from 'axios';

const Predict = ()=>{

    const [file, setFile] = useState(null);
    const [predictions, setPredictions] = useState('');
    const [fileName, setFileName] = useState('');
    const [error, setError] = useState('');
  
    //////for second
  
    const [file1, setFile1] = useState(null);
    const [prediction1, setPrediction1] = useState('');
    const [fileName1, setFileName1] = useState('');
    const [error1, setError1] = useState('');
  
   
  
  
    const handleFileUpload = (event) => {
      const selectedFile = event.target.files[0];
      if (selectedFile) {
        setFile(selectedFile);
        setFileName(selectedFile.name); // Set the selected file name
        setError('');
      } else {
        setError('No file selected');
      }
    };
  
    ///////file of Unsw
     
    // const handleFileUploadUnsw = (event) => {
    //   const selectedFile1 = event.target.files[0];
    //   if (selectedFile1) {
    //     setFile1(selectedFile1);
    //     setFileName1(selectedFile1.name); // Set the selected file name
    //     setError1('');
    //   } else {
    //     setError1('No file selected');
    //   }
    // };
    //////end of file unsw 
  
    const handlePredict = async () => {
      try {
        const formData = new FormData();
        formData.append('file', file);
  
        const config = {
          headers: {
            'Content-Type': 'multipart/form-data' // Set the Content-Type header to 'application/json'
          }
        };
  
        const response = await axios.post('http://localhost:5000/predict', formData, config);
  
        if (response.data.error) {
          setError(response.data.error);
          setPredictions('');
        } else {
  
          
            const { data, data2, data3 } = response.data;
            const predictions = {
              predictions1: data.predictions,
              predictions2: data2.predictions5,
              predictions3: data3.predictions6
            };
            setPredictions(predictions);
            setError('');
          
          // const predictions = response.data.predictions;
          // setPrediction(predictions);
          // setError('');
        }
      } catch (error) {
        console.error(error);
        setError('An error occurred. Please try again.');
        setPredictions('');
      }
    };
  ///////////////Predict UNSW
  
  // const handlePredictUnsw = async () => {
  //   try {
  //     const formData1 = new FormData();
  //     formData1.append('file1', file1);
  
  //     const config1 = {
  //       headers: {
  //         'Content-Type': 'multipart/form-data' // Set the Content-Type header to 'application/json'
  //       }
  //     };
  
  //     const response1 = await axios.post('http://localhost:5000/predict-Unsw', formData1, config1);
  
  //     if (response1.data.error) {
  //       setError1(response1.data.error);
  //       setPrediction1('');
  //     } else {
  //       const predictions1 = response1.data.predictions;
  //       setPrediction1(predictions1);
  //       setError1('');
  //     }
  //   } catch (error1) {
  //     console.error(error1);
  //     setError1('An error occurred. Please try again.');
  //     setPrediction1('');
  //   }
  // };
  //////end handle UNSW predict
  
  

    return(
          <div className='containers'>
     
      <div className='container-NSL' >
       <h1>NSL-KDD</h1>

      <div className='container-prediction'>
        
     {/* <input className='NSL-Input' type="file" accept=".json" onChange={handleFileUpload} />  */}
     <label className="label">
   <input type="file"  accept=".json" onChange={handleFileUpload} />
   <span>{fileName || 'Select a file'}</span>
  </label>


      <button className='button-17' onClick={handlePredict}>Predict</button>
      {predictions && (
        <div className='prediction-tableee'>
        <table className='prediction-table'>
        <thead>
          <tr>
            <th>Algorithme de feature selection</th>
            <th>Algorithme de Classification</th>

            <th>Prediction</th>
            
          </tr>
        </thead>
        <tbody>
           
              <tr >
                <td>RFE</td>
                <td>Decision Tree</td>
                <td>  {predictions.predictions1.map((prediction, index) => (
               <li key={index}>{prediction} </li>
            ))}</td>
              </tr>
              <tr >
                <td>RandomForest </td>
                <td>RandomForest </td>
                <td>  {predictions.predictions2.map((prediction, index) => (
              <li key={index}>{prediction}</li>
            ))}</td>
              </tr>
              <tr >
                <td>CFS</td>
                <td>Decision Tree</td>
                <td>{predictions.predictions3.map((prediction, index) => (
              <li key={index}>{prediction}</li>  ))}
              </td>
              </tr>
            
          </tbody>
        </table>
        </div>
        )}
        
            {error && <p>Error: {error}</p>}

      </div>
      </div>

       {/* <div className='container-UNSW' >
       <h1> UNSW_NB15</h1>

      <div className='container-prediction'>
        
     
     <label className="label">
   <input type="file"  accept=".json" onChange={handleFileUploadUnsw} />
   <span>{fileName1 || 'Select a file'}</span>
  </label>


      <button className='button-17' onClick={handlePredictUnsw}>Predict</button>
      
      {prediction1.length > 0 && !error1 && (
        <table className='prediction-table'>
          <thead>
            <tr>
              <th>Index</th>
              <th>Prediction</th>
            </tr>
          </thead>
          <tbody>
            {prediction1.map((pred, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{pred}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {error1 && <p>Error: {error1}</p>}

      </div>
      </div> 
  */}
      

      
    </div>




    )

}
export default Predict;
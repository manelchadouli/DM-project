import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [file, setFile] = useState(null);
  const [prediction, setPrediction] = useState('');
  const [error, setError] = useState('');

  const handleFileUpload = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setError('');
    } else {
      setError('No file selected');
    }
  };
  

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
        setPrediction('');
      } else {
        const predictions = response.data.predictions;
        setPrediction(predictions);
        setError('');
      }
    } catch (error) {
      console.error(error);
      setError('An error occurred. Please try again.');
      setPrediction('');
    }
  };

  return (
    <div>
      <input type="file" accept=".json" onChange={handleFileUpload} />
      <button onClick={handlePredict}>Predict</button>
      {error && <p>Error: {error}</p>}
      {prediction && !error && <p>Prediction: {prediction}</p>}
    </div>
  );
};

export default App;

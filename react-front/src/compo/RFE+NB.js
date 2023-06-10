import React, { useState } from 'react';
import Profil from "./pro";
import './pro.css';



const Rfenb = ()=>{
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
      setIsDropdownOpen(!isDropdownOpen);
    };

    return(
        <div>
              <Profil toggleDropdown={toggleDropdown} isDropdownOpen={isDropdownOpen}/> 
              <div><h1>Improvement</h1>

    <table>
        <tr>
            <th></th> 
            <th >Accuracy</th>
            <th >Precision</th>
            <th >Recall</th>
            <th >F1 Score</th>
            
            <th >False Alarm Rate</th>
        </tr>
        <tr>
            <th >KNN</th>
            <td>0.048022677</td>
            <td>0.094962215</td>
            <td>0.226536227</td>
            <td>0.134075087</td>
            
            <td>0.049801977</td>
        </tr>
        <tr>
            <th>SVM</th>
            <td>0.384372355</td>
            <td>0.131307503</td>
            <td>0.180372975</td>
            <td>0.226768989</td>
           
            <td>0.385694389</td>
        </tr>
        <tr>
            <th >Naive Bayes</th>
            <td>0.197606346</td>
            <td>0.088121772</td>
            <td>0.094160807</td>
            <td>0.154147046</td>
           
            <td>0.198276733</td>
        </tr>
        <tr>
            <th >Logistic Regression</th>
            <td>0.189053365</td>
            <td>0.078110795</td>
            <td>0.090797921</td>
            <td>0.138611811</td>
          
            <td>0.189690117</td>
        </tr>
    </table>



              </div>
              
         


           

         </div>


    )

}
export default Rfenb;
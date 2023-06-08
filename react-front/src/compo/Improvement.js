import React, { useState } from 'react';
import Profil from "./pro";
import './pro.css';
import './improvement.css'
import './initial.css'

const Improvement= ()=>{
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
      setIsDropdownOpen(!isDropdownOpen);
    };

    return(
        <div className='content'>
             <Profil toggleDropdown={toggleDropdown} isDropdownOpen={isDropdownOpen}/>
             <div><h1>NSL-KDD-RF feature s</h1><table>
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
                        <td>RandomForestClassifier With parameters</td>
                        <td>0,000709755</td>
                        <td>4,74769E-05</td>
                        <td>0,002640162</td>
                        <td>0,001488922</td>
                        <td>6,20964E-05</td>
                    </tr>
             
                    <tr>
                        <td>Naive Bayes Classifier</td>
                        <td>0,35696225</td>
                        <td>0,447939205</td>
                        <td>0,19055754</td>
                        <td>0,24840158</td>
                        <td>0,575881769</td>
                    </tr>
                </tbody>
            </table></div>
            <div><h1>NSL-KDD-RFE feature s</h1><table>
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
                        <td> DecisionTreeClassifier </td>
                        <td>0,000709755</td>
                        <td>4,74769E-05</td>
                        <td>0,002640162</td>
                        <td>0,001488922</td>
                        <td>6,20964E-05</td>
                    </tr>
                    <tr>
                        <td> LogisticRegression  </td>
                        <td>0,000709755</td>
                        <td>4,74769E-05</td>
                        <td>0,002640162</td>
                        <td>0,001488922</td>
                        <td>6,20964E-05</td>
                    </tr>
             
                    <tr>
                        <td>Naive Bayes Classifier</td>
                        <td>0,35696225</td>
                        <td>0,447939205</td>
                        <td>0,19055754</td>
                        <td>0,24840158</td>
                        <td>0,575881769</td>
                    </tr>
                </tbody>
            </table></div>
            <div><h1>NSL-KDD-CFS feature s</h1><table>
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
                        <td> RandomForestClassifier With parameters </td>
                        <td>0,001463869</td>
                        <td>0,002206773</td>
                        <td>0,003261376</td>
                        <td>0,002820912</td>
                        <td>0,000745156</td>
                    </tr>
                  
             
                    <tr>
                        <td>Naive Bayes Classifier</td>
                        <td>0,344142306</td>
                        <td>0,3828534</td>
                        <td>0,139617953</td>
                        <td>0,242825005</td>
                        <td>0,537568306</td>
                    </tr>
                </tbody>
            </table></div>
            <div><h1>NSL-KDD-CHI2 feature s</h1><table>
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
                        <td> Naive Bayes Classifier</td>
                        <td>0,372000177</td>
                        <td>0,460764901</td>
                        <td>0,1416369</td>
                        <td>0,280695231</td>
                        <td>0,577372081</td>
                    </tr>
                </tbody>
            </table></div>
            <div><h1>NSL-KDD-Linear reg feature s</h1><table>
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
                        <td> LogisticRegression </td>
                        <td>0,007674223</td>
                        <td>0,012221875</td>
                        <td>0,01630688</td>
                        <td>0,014532735</td>
                        <td>0,004222553</td>
                    </tr>
                  
             
                    <tr>
                        <td>Naive Bayes Classifier</td>
                        <td>0,358914075</td>
                        <td>0,411759044</td>
                        <td>0,121913341</td>
                        <td>0,266373511</td>
                        <td>0,551167412</td>
                    </tr>
                </tbody>
            </table></div>
            
          
           

         </div>
         


    )

}
export default Improvement;
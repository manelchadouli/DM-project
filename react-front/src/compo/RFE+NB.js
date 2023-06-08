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
              <div><h1>Acuuracy</h1>
              <table>
  <thead>
    <tr>
      <th>Step</th>
      <th>SVM</th>
      <th>SVM with Param</th>
      <th>KNN</th>
      <th>KNN with Param</th>
      <th>Naive Bayes</th>
      <th>Logistic Regression</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Initial State</td>
      <td>0.57737643</td>
      <td>0.57737643</td>
      <td>0.928280939</td>
      <td>0.928280939</td>
      <td>0.753457609</td>
      <td>0.754252869</td>
    </tr>
    <tr>
      <td>After Normalization</td>
      <td>0.371971024</td>
      <td>0.384372354</td>
      <td>0.033034763</td>
      <td>0.045225488</td>
      <td>0.18501998</td>
      <td>0.189053365</td>
    </tr>
    <tr>
      <td>Correlation Columns</td>
      <td>0,372063542</td>
      <td>0.378222856</td>
      <td>0.036871322</td>
      <td>0.047162458</td>
      <td>0.190972619</td>
      <td>0.186510108</td>
    </tr>
    <tr>
      <td>Correlation Label</td>
      <td>0,371091107</td>
      <td>0.384197147</td>
      <td>0.03405248</td>
      <td>0.045207772</td>
      <td>0.181543671</td>
      <td>0.188023838</td>
    </tr>
    <tr>
      <td>Random Forest Selection</td>
      <td>0,372447392</td>
      <td>0.381407836</td>
      <td>0.032509203</td>
      <td>0.043558198</td>
      <td>0.197606346</td>
      <td>0.184157792</td>
    </tr>
    <tr>
      <td>Mutual Info Classifier</td>
      <td>0,373504458</td>
      <td>0.373801683</td>
      <td>0.035471743</td>
      <td>0.048022176</td>
      <td>0.110661208</td>
      <td>0.185734533</td>
    </tr>
    <tr>
      <td>RFE</td>
      <td>0.372020216</td>
      <td>0.380945247</td>
      <td>0.037475641</td>
      <td>0.047567062</td>
      <td>0.191513947</td>
      <td>0.186681365</td>
    </tr>
    <tr>
      <td>Chi2</td>
      <td>0.373833192</td>
      <td>0.375898112</td>
      <td>0.036548493</td>
      <td>0.047924254</td>
      <td>0.136125273</td>
      <td>0.115216236</td>
    </tr>
  </tbody>
</table>

              </div>
              <div><h1>False alarm</h1>
              <table>
  <thead>
    <tr>
      <th>Step</th>
      <th>SVM</th>
      <th>SVM with Param</th>
      <th>KNN</th>
      <th>KNN with Param</th>
      <th>Naive Bayes</th>
      <th>Logistic Regression</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Initial State</td>
      <td>0.424163776</td>
      <td>0.424163776</td>
      <td>0.071755898</td>
      <td>0.071755898</td>
      <td>0.247042531</td>
      <td>0.246687892</td>
    </tr>
    <tr>
      <td>After Normalization</td>
      <td>0.050972879</td>
      <td>0.038469387</td>
      <td>0.037871058</td>
      <td>0.026084769</td>
      <td>0.06177252</td>
      <td>0.056997775</td>
    </tr>
    <tr>
      <td>Correlation Columns</td>
      <td>0.050879762</td>
      <td>0.044674574</td>
      <td>0.034590155</td>
      <td>0.022445264</td>
      <td>0.055775361</td>
      <td>0.059543645</td>
    </tr>
    <tr>
      <td>Correlation Label</td>
      <td>0.051858485</td>
      <td>0.038643735</td>
      <td>0.037853227</td>
      <td>0.026096656</td>
      <td>0.065289189</td>
      <td>0.057025512</td>
    </tr>
    <tr>
      <td>Random Forest Selection</td>
      <td>0.050493423</td>
      <td>0.041461032</td>
      <td>0.039376787</td>
      <td>0.027754939</td>
      <td>0.048765798</td>
      <td>0.061867619</td>
    </tr>
    <tr>
      <td>Mutual Info Classifier</td>
      <td>0.049346296</td>
      <td>0.049070906</td>
      <td>0.035937385</td>
      <td>0.021953921</td>
      <td>0.136640917</td>
      <td>0.060243017</td>
    </tr>
    <tr>
      <td>RFE</td>
      <td>0.049914907</td>
      <td>0.04192662</td>
      <td>0.034409863</td>
      <td>0.023459649</td>
      <td>0.055180995</td>
      <td>0.059353448</td>
    </tr>
    <tr>
      <td>Chi2</td>
      <td>0.049033263</td>
      <td>0.046883637</td>
      <td>0.030403832</td>
      <td>0.018738397</td>
      <td>0.10987659</td>
      <td>0.130657627</td>
    </tr>
  </tbody>
</table>

               </div>
         


           

         </div>


    )

}
export default Rfenb;
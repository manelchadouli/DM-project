import React, { useState } from 'react';
import './NSL_kdd.css'
import Profil from "./pro";
import './pro.css';
import './WSN_15.css'

const Rfchi2 = ()=>{
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
      setIsDropdownOpen(!isDropdownOpen);
    };

    return(
        <div className="content">
         <Profil toggleDropdown={toggleDropdown} isDropdownOpen={isDropdownOpen}/> 


        <div>
           <h1>CHI2</h1>
           <table>
  <thead>
    <tr>
      <th>Model</th>
      <th>Accuracy</th>
      <th>Precision</th>
      <th>Recall</th>
      <th>F1 Score</th>
      <th>False Alarm Rate</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>RandomForestClassifier</td>
      <td>0.967543946</td>
      <td>0.165239856</td>
      <td>0.997248548</td>
      <td>0.283504259</td>
      <td>0.032648557</td>
    </tr>
    <tr>
      <td>DecisionTreeClassifier</td>
      <td>0.971120647</td>
      <td>0.180062865</td>
      <td>0.980739835</td>
      <td>0.30426329</td>
      <td>0.028941691</td>
    </tr>
    <tr>
      <td>LogisticRegression</td>
      <td>0.869469105</td>
      <td>0.042233066</td>
      <td>0.889024763</td>
      <td>0.080635546</td>
      <td>0.130657627</td>
    </tr>
    <tr>
      <td>K-Nearest Neighbors</td>
      <td>0.964829432</td>
      <td>0.046595427</td>
      <td>0.22928768</td>
      <td>0.077451335</td>
      <td>0.030403832</td>
    </tr>
    <tr>
      <td>KNNWithBestParam</td>
      <td>0.976205193</td>
      <td>0.063471631</td>
      <td>0.195964537</td>
      <td>0.095886313</td>
      <td>0.018738397</td>
    </tr>
    <tr>
      <td>Naive Bayes Classifier</td>
      <td>0.889582882</td>
      <td>0.045390388</td>
      <td>0.806175482</td>
      <td>0.085941956</td>
      <td>0.10987659</td>
    </tr>
    <tr>
      <td>SVM</td>
      <td>0.951209622</td>
      <td>0.115570168</td>
      <td>0.988688474</td>
      <td>0.20694951</td>
      <td>0.049033263</td>
    </tr>
    <tr>
      <td>SVMWithBestParam</td>
      <td>0.953274542</td>
      <td>0.119052937</td>
      <td>0.977682666</td>
      <td>0.212258985</td>
      <td>0.046883637</td>
    </tr>
  </tbody>
</table>

           

         </div>
         <div  ><h1>Corr
         </h1>
         <table>
  <thead>
    <tr>
      <th>Model</th>
      <th>Accuracy</th>
      <th>Precision</th>
      <th>Recall</th>
      <th>F1 Score</th>
      <th>False Alarm Rate</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>RandomForestClassifier</td>
      <td>0.971717092</td>
      <td>0.185227208</td>
      <td>0.998165699</td>
      <td>0.312470093</td>
      <td>0.02845431</td>
    </tr>
    <tr>
      <td>DecisionTreeClassifier</td>
      <td>0.97121907</td>
      <td>0.180569627</td>
      <td>0.980739835</td>
      <td>0.304986452</td>
      <td>0.02884263</td>
    </tr>
    <tr>
      <td>LogisticRegression</td>
      <td>0.943276707</td>
      <td>0.101121139</td>
      <td>0.989911342</td>
      <td>0.183497677</td>
      <td>0.057025512</td>
    </tr>
    <tr>
      <td>K-Nearest Neighbors</td>
      <td>0.962333419</td>
      <td>0.14506891</td>
      <td>0.99113421</td>
      <td>0.253093407</td>
      <td>0.037853227</td>
    </tr>
    <tr>
      <td>KNNWithBestParam</td>
      <td>0.973488711</td>
      <td>0.184244751</td>
      <td>0.909507796</td>
      <td>0.306416727</td>
      <td>0.026096656</td>
    </tr>
    <tr>
      <td>Naive Bayes Classifier</td>
      <td>0.93500128</td>
      <td>0.088636301</td>
      <td>0.979822684</td>
      <td>0.162566574</td>
      <td>0.065289189</td>
    </tr>
    <tr>
      <td>SVM</td>
      <td>0.949439972</td>
      <td>0.112857538</td>
      <td>0.998777132</td>
      <td>0.20279959</td>
      <td>0.050879762</td>
    </tr>
    <tr>
      <td>SVMWithBestParam</td>
      <td>0.961573591</td>
      <td>0.14301406</td>
      <td>0.99510853</td>
      <td>0.250086435</td>
      <td>0.038643735</td>
    </tr>
  </tbody>
</table>


 </div>
  <div><h1>CFS</h1>
  <table>
  <thead>
    <tr>
      <th>Model</th>
      <th>Accuracy</th>
      <th>Precision</th>
      <th>Recall</th>
      <th>F1 Score</th>
      <th>False Alarm Rate</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>RandomForestClassifier</td>
      <td>0.970632468</td>
      <td>0.179647965</td>
      <td>0.998471415</td>
      <td>0.304507948</td>
      <td>0.029547945</td>
    </tr>
    <tr>
      <td>DecisionTreeClassifier</td>
      <td>0.97370721</td>
      <td>0.194437712</td>
      <td>0.981045552</td>
      <td>0.324551201</td>
      <td>0.026340346</td>
    </tr>
    <tr>
      <td>LogisticRegression</td>
      <td>0.939987402</td>
      <td>0.094975891</td>
      <td>0.975542648</td>
      <td>0.173099352</td>
      <td>0.060243017</td>
    </tr>
    <tr>
      <td>K-Nearest Neighbors</td>
      <td>0.963752682</td>
      <td>0.141755382</td>
      <td>0.915927851</td>
      <td>0.245513398</td>
      <td>0.035937385</td>
    </tr>
    <tr>
      <td>KNNWithBestParam</td>
      <td>0.976303616</td>
      <td>0.172751027</td>
      <td>0.707428921</td>
      <td>0.277691108</td>
      <td>0.021953921</td>
    </tr>
    <tr>
      <td>Naive Bayes Classifier</td>
      <td>0.864118817</td>
      <td>0.044473385</td>
      <td>0.981351269</td>
      <td>0.085090591</td>
      <td>0.136640917</td>
    </tr>
    <tr>
      <td>SVM</td>
      <td>0.950880888</td>
      <td>0.114638135</td>
      <td>0.985937022</td>
      <td>0.205394389</td>
      <td>0.049346296</td>
    </tr>
    <tr>
      <td>SVMWithBestParam</td>
      <td>0.951178126</td>
      <td>0.115586502</td>
      <td>0.989605625</td>
      <td>0.20699578</td>
      <td>0.049070906</td>
    </tr>
  </tbody>
</table>

 
</div>
<div><h1>RF</h1>
<table>
  <thead>
    <tr>
      <th>Model</th>
      <th>Accuracy</th>
      <th>Precision</th>
      <th>Recall</th>
      <th>F1 Score</th>
      <th>False Alarm Rate</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>RandomForestClassifier</td>
      <td>0.97242574</td>
      <td>0.189125022</td>
      <td>0.998471415</td>
      <td>0.318013632</td>
      <td>0.027743051</td>
    </tr>
    <tr>
      <td>DecisionTreeClassifier</td>
      <td>0.972108817</td>
      <td>0.185936599</td>
      <td>0.986242739</td>
      <td>0.312884923</td>
      <td>0.027982779</td>
    </tr>
    <tr>
      <td>LogisticRegression</td>
      <td>0.940762977</td>
      <td>0.097097879</td>
      <td>0.988077041</td>
      <td>0.176819761</td>
      <td>0.059543645</td>
    </tr>
    <tr>
      <td>K-Nearest Neighbors</td>
      <td>0.965152261</td>
      <td>0.147759445</td>
      <td>0.925405075</td>
      <td>0.254830155</td>
      <td>0.034590155</td>
    </tr>
    <tr>
      <td>KNNWithBestParam</td>
      <td>0.975443397</td>
      <td>0.157945592</td>
      <td>0.649648426</td>
      <td>0.254110613</td>
      <td>0.022445264</td>
    </tr>
    <tr>
      <td>Naive Bayes Classifier</td>
      <td>0.944430228</td>
      <td>0.101866326</td>
      <td>0.976154081</td>
      <td>0.184481165</td>
      <td>0.055775361</td>
    </tr>
    <tr>
      <td>SVM</td>
      <td>0.949823822</td>
      <td>0.113622926</td>
      <td>0.998777132</td>
      <td>0.204034474</td>
      <td>0.050493423</td>
    </tr>
    <tr>
      <td>SVMWithBestParam</td>
      <td>0.955599299</td>
      <td>0.126447914</td>
      <td>0.997859982</td>
      <td>0.224453308</td>
      <td>0.044674574</td>
    </tr>
  </tbody>
</table>

 
 </div>
 <div><h1>RFE</h1>
 <table>
  <thead>
    <tr>
      <th>Model</th>
      <th>Accuracy</th>
      <th>Precision</th>
      <th>Recall</th>
      <th>F1 Score</th>
      <th>False Alarm Rate</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>RandomForestClassifier</td>
      <td>0.972112754</td>
      <td>0.187363709</td>
      <td>0.998165699</td>
      <td>0.315504663</td>
      <td>0.028056084</td>
    </tr>
    <tr>
      <td>DecisionTreeClassifier</td>
      <td>0.971669849</td>
      <td>0.183288717</td>
      <td>0.983797004</td>
      <td>0.309007106</td>
      <td>0.028408742</td>
    </tr>
    <tr>
      <td>LogisticRegression</td>
      <td>0.940934234</td>
      <td>0.097133902</td>
      <td>0.985325589</td>
      <td>0.17683529</td>
      <td>0.059353448</td>
    </tr>
    <tr>
      <td>K-Nearest Neighbors</td>
      <td>0.96575658</td>
      <td>0.157343166</td>
      <td>0.991439927</td>
      <td>0.271585294</td>
      <td>0.034409863</td>
    </tr>
    <tr>
      <td>KNNWithBestParam</td>
      <td>0.975848901</td>
      <td>0.193612095</td>
      <td>0.869153164</td>
      <td>0.31668059</td>
      <td>0.023459649</td>
    </tr>
    <tr>
      <td>Naive Bayes Classifier</td>
      <td>0.944971556</td>
      <td>0.10212766</td>
      <td>0.968511159</td>
      <td>0.184771514</td>
      <td>0.055180995</td>
    </tr>
    <tr>
      <td>SVM</td>
      <td>0.950396646</td>
      <td>0.114757554</td>
      <td>0.998471415</td>
      <td>0.205855473</td>
      <td>0.049914907</td>
    </tr>
    <tr>
      <td>SVMWithBestParam</td>
      <td>0.958321687</td>
      <td>0.133486201</td>
      <td>0.996637114</td>
      <td>0.235438558</td>
      <td>0.04192662</td>
    </tr>
  </tbody>
</table>


 
 </div>
 <div><h1>Label corr</h1>
 <table>
  <thead>
    <tr>
      <th>Model</th>
      <th>Accuracy</th>
      <th>Precision</th>
      <th>Recall</th>
      <th>F1 Score</th>
     
      <th>False Alarm Rate</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>RandomForestClassifier</td>
      <td>0.970630499</td>
      <td>0.179638084</td>
      <td>0.998471415</td>
      <td>0.304493753</td>
      
      <td>0.029549926</td>
    </tr>
    <tr>
      <td>DecisionTreeClassifier</td>
      <td>0.97243755</td>
      <td>0.187452671</td>
      <td>0.983797004</td>
      <td>0.314903611</td>
      
      <td>0.027636065</td>
    </tr>
    <tr>
      <td>LogisticRegression</td>
      <td>0.938410661</td>
      <td>0.093213695</td>
      <td>0.981351269</td>
      <td>0.170255649</td>
     
      <td>0.061867619</td>
    </tr>
    <tr>
      <td>K-Nearest Neighbors</td>
      <td>0.960790142</td>
      <td>0.139684876</td>
      <td>0.986548456</td>
      <td>0.244719979</td>
      
      <td>0.039376787</td>
    </tr>
    <tr>
      <td>KNNWithBestParam</td>
      <td>0.971839137</td>
      <td>0.175116293</td>
      <td>0.909202079</td>
      <td>0.293670386</td>
      
      <td>0.027754939</td>
    </tr>
    <tr>
      <td>Naive Bayes Classifier</td>
      <td>0.951063955</td>
      <td>0.109446796</td>
      <td>0.924793641</td>
      <td>0.195729537</td>
      
      <td>0.048765798</td>
    </tr>
    <tr>
      <td>SVM</td>
      <td>0.94846755</td>
      <td>0.110963929</td>
      <td>0.998777132</td>
      <td>0.199737108</td>
      
      <td>0.051858485</td>
    </tr>
    <tr>
      <td>SVMWithBestParam</td>
      <td>0.958784276</td>
      <td>0.134783148</td>
      <td>0.996637114</td>
      <td>0.237453565</td>
      
      <td>0.041461032</td>
    </tr>
  </tbody>
</table>

 
 </div>
         </div>


    )

}
export default Rfchi2;
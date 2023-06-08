import React, { useState } from 'react';
import './NSL_kdd.css'
import Profil from "./pro";
import './pro.css';

const Corrdt = ()=>{
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
      setIsDropdownOpen(!isDropdownOpen);
    };

    return(
        <div className="content">
         <Profil toggleDropdown={toggleDropdown} isDropdownOpen={isDropdownOpen}/> 
         <div className="NSL-KDD-Non Normalisation">
            <h1>NSL-KDD-Non Normalisation</h1>
            <table>
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
                        <td>DecisionTreeClassifier</td>
                        <td>0.949917935</td>
                        <td>0.959660665</td>
                        <td>0.860847958</td>
                        <td>0.907572657</td>
                        <td>0,014468455</td>
                    </tr>
                    <tr>
                        <td>RandomForestClassifier</td>
                        <td>0.943308344</td>
                        <td>0.959082014</td>
                        <td>0.837241808</td>
                        <td>0.894029851</td>
                        <td>0,014282166</td>
                    </tr>
                    <tr>
                        <td>RandomForestClassifier With parameters</td>
                        <td>0.942332431</td>
                        <td>0.95924933</td>
                        <td>0.833514521</td>
                        <td>0.891972744</td>
                        <td>0,014157973</td>
                    </tr>
                    <tr>
                        <td>LogisticRegression</td>
                        <td>0.932085348</td>
                        <td>0.926931106</td>
                        <td>0.82745768</td>
                        <td>0.874374333</td>
                        <td>0,026080477</td>
                    </tr>
                    <tr>
                        <td>Naive Bayes Classifier</td>
                        <td>0.519096837</td>
                        <td>0.365151329</td>
                        <td>0.925609567</td>
                        <td>0.523702825</td>
                        <td>0,643442623</td>
                    </tr>
                </tbody>
            </table>
        </div><div><h1>NSL-KDD-Normalisation</h1><table>
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
      <td>DecisionTreeClassifier</td>
      <td>0.950139733</td>
      <td>0.960492116</td>
      <td>0.860847958</td>
      <td>0.907944308</td>
      <td>0,014344262</td>
    </tr>
    <tr>
      <td>RandomForestClassifier</td>
      <td>0.934746928</td>
      <td>0.957795798</td>
      <td>0.807112906</td>
      <td>0.876021913</td>
      <td>0,014282166</td>
    </tr>
    <tr>
      <td>RandomForestClassifier With parameters</td>
      <td>0.940025729</td>
      <td>0.959032666</td>
      <td>0.825283429</td>
      <td>0.887145242</td>
      <td>0,014157973</td>
    </tr>
    <tr>
      <td>LogisticRegression</td>
      <td>0.943397063</td>
      <td>0.948722406</td>
      <td>0.84764715</td>
      <td>0.895341207</td>
      <td>0,018256334</td>
    </tr>
    <tr>
      <td>Naive Bayes Classifier</td>
      <td>0.810451138</td>
      <td>0.618179834</td>
      <td>0.879794999</td>
      <td>0.726142409</td>
      <td>0,2174615</td>
    </tr>
  </tbody>
</table>
</div><div><h1>NSL-KDD-RF feature s</h1><table>
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
      <td>DecisionTreeClassifier</td>
      <td>0.941667036</td>
      <td>0.92972157</td>
      <td>0.860847958</td>
      <td>0.893960165</td>
      <td>0,02260308</td>

    </tr>
    <tr>
      <td>RandomForestClassifier</td>
      <td>0.947256355</td>
      <td>0.963780919</td>
      <td>0.847181239</td>
      <td>0.901727415</td>
      <td>0,014282166</td>
    </tr>
    <tr>
      <td>RandomForestClassifier With parameters</td>
      <td>0.94792175</td>
      <td>0.962247586</td>
      <td>0.85106383</td>
      <td>0.903247074</td>
      <td>0,01422007</td>
    </tr>
    <tr>
      <td>LogisticRegression</td>
      <td>0.909683716</td>
      <td>0.891238671</td>
      <td>0.778847647</td>
      <td>0.831261396</td>
      <td>0,034463487</td>
    </tr>
    <tr>
      <td>Naive Bayes Classifier</td>
      <td>0.881470967</td>
      <td>0.816182642</td>
      <td>0.755086194</td>
      <td>0.784446596</td>
      <td>0,067560854</td>
    </tr>
  </tbody>
</table>
</div><div><h1>NSL-KDD-RFE feature s</h1><table>
  <thead>
    <tr>
      <th>Model</th>
      <th>Accuracy</th>
      <th>Precision</th>
      <th>Recall</th>
      <th>F1 Score</th>
      <th>false alarm</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>DecisionTreeClassifier</td>
      <td>0.950051014</td>
      <td>0.96</td>
      <td>0.861003261</td>
      <td>0.907810709</td>
      <td>0,01403378</td>
    </tr>
    <tr>
      <td>RandomForestClassifier</td>
      <td>0.940469325</td>
      <td>0.958610761</td>
      <td>0.827302376</td>
      <td>0.888129376</td>
      <td>0,014344262</td>
    </tr>
    <tr>
      <td>RandomForestClassifier With parameters</td>
      <td>0.939227255</td>
      <td>0.958401158</td>
      <td>0.822953875</td>
      <td>0.885528075</td>
      <td>0,01422007</td>
    </tr>
    <tr>
      <td>LogisticRegression</td>
      <td>0.945348889</td>
      <td>0.958281993</td>
      <td>0.8454729</td>
      <td>0.898349835</td>
      <td>0,014841033</td>
    </tr>
    <tr>
      <td>Naive Bayes Classifier</td>
      <td>0.904050038</td>
      <td>0.87813937</td>
      <td>0.771082466</td>
      <td>0.821136194</td>
      <td>0,045702931</td>
    </tr>
  </tbody>
</table>
</div><div><h1>NSL-KDD-CFS feature s</h1><table>
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
      <td>DecisionTreeClassifier</td>
      <td>0.947034556</td>
      <td>0.949905644</td>
      <td>0.859916136</td>
      <td>0.902673622</td>
      <td>0,018132141</td>
    </tr>
    <tr>
      <td>RandomForestClassifier</td>
      <td>0.942421151</td>
      <td>0.960910884</td>
      <td>0.832272092</td>
      <td>0.891977364</td>
      <td>0,013537009</td>
    </tr>
    <tr>
      <td>RandomForestClassifier With parameters</td>
      <td>0.9437963</td>
      <td>0.961456103</td>
      <td>0.836775897</td>
      <td>0.894793656</td>
      <td>0,013412817</td>
    </tr>
    <tr>
      <td>LogisticRegression</td>
      <td>0.904094397</td>
      <td>0.858267717</td>
      <td>0.795620438</td>
      <td>0.825757576</td>
      <td>0,052533532</td>
    </tr>
    <tr>
      <td>Naive Bayes Classifier</td>
      <td>0.863239143</td>
      <td>0.74800473</td>
      <td>0.785991614</td>
      <td>0.76652783</td>
      <td>0,105874317</td>
    </tr>
  </tbody>
</table>
</div><div><h1>NSL-KDD-CHI2 feature s</h1><table>
  <thead>
    <tr>
      <th>Model</th>
      <th>Accuracy</th>
      <th>Precision</th>
      <th>Recall</th>
      <th>F1 Score</th>
      <th>false alarm</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>DecisionTreeClassifier</td>
      <td>0.949296899</td>
      <td>0.957340242</td>
      <td>0.860847958</td>
      <td>0.90653365</td>
      <td>0,015337804</td>
    </tr>
    <tr>
      <td>RandomForestClassifier</td>
      <td>0.929335049</td>
      <td>0.958901515</td>
      <td>0.786302221</td>
      <td>0.8640669</td>
      <td>0,013474913</td>
    </tr>
    <tr>
      <td>RandomForestClassifier With parameters</td>
      <td>0.934613849</td>
      <td>0.960148285</td>
      <td>0.804472744</td>
      <td>0.875443637</td>
      <td>0,01335072</td>
    </tr>
    <tr>
      <td>LogisticRegression</td>
      <td>0.869848734</td>
      <td>0.801687037</td>
      <td>0.723248952</td>
      <td>0.760450686</td>
      <td>0,071535022</td>
    </tr>
    <tr>
      <td>Naive Bayes Classifier</td>
      <td>0.891097015</td>
      <td>0.82591623</td>
      <td>0.783972667</td>
      <td>0.804398056</td>
      <td>0,066070541</td>
    </tr>
  </tbody>
</table>
</div><div>
                <h1>NSL-KDD-Linear reg feature s</h1>
                <table>
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
                            <td>DecisionTreeClassifier</td>
                            <td>0.947611232</td>
                            <td>0.957058414</td>
                            <td>0.85494642</td>
                            <td>0.903125256</td>
                            <td>0,015896672</td>
                        </tr>
                        <tr>
                            <td>RandomForestClassifier</td>
                            <td>0.929068891</td>
                            <td>0.959203036</td>
                            <td>0.785059792</td>
                            <td>0.863438381</td>
                            <td>0,013412817</td>
                        </tr>
                        <tr>
                            <td>RandomForestClassifier With parameters</td>
                            <td>0.93310562</td>
                            <td>0.959895542</td>
                            <td>0.799192421</td>
                            <td>0.87220339</td>
                            <td>0,013412817</td>
                        </tr>
                        <tr>
                            <td>LogisticRegression</td>
                            <td>0.938606219</td>
                            <td>0.937965691</td>
                            <td>0.840658487</td>
                            <td>0.886650287</td>
                            <td>0,021857923</td>
                        </tr>
                        <tr>
                            <td>Naive Bayes Classifier</td>
                            <td>0.886040012</td>
                            <td>0.814021422</td>
                            <td>0.779002951</td>
                            <td>0.796127291</td>
                            <td>0,092275211</td>
                        </tr>
                    </tbody>
                </table>
            </div></div>
      


    )

}
export default Corrdt;
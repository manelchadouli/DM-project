import React, { useState } from 'react';
import Profil from "./pro";
import './pro.css';
import './Graphs.css'
import 'bootstrap/dist/css/bootstrap.css';

const Graphs2 = ()=>{
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
      setIsDropdownOpen(!isDropdownOpen);
    };

    return(
        <div className='content'>
             <Profil toggleDropdown={toggleDropdown} isDropdownOpen={isDropdownOpen}/> 
             <h1>UNSW_NB15 Imporvements</h1>
           <div  className='UNSW_Imp'>
            <img src='/photos/accuracy_improvement_plot.png' alt='accI'/>
             <img src='/photos/FalseAlarm_plot.png' alt='falsI'/> 
             <img src='/photos/F1Score_improvement_plot.png' alt='accI'/>
             <img src='/photos/precision_plot.png' alt='falsI'/> 
           </div>
           

         </div>


    )

}
export default Graphs2;
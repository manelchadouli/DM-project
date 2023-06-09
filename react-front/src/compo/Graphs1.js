import React, { useState } from 'react';
import Profil from "./pro";
import './pro.css';
import './Graphs.css'
import 'bootstrap/dist/css/bootstrap.css';


const Graphs1 = ()=>{
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
      setIsDropdownOpen(!isDropdownOpen);
    };
    


    return(
        <div >
              <Profil toggleDropdown={toggleDropdown} isDropdownOpen={isDropdownOpen}/> 
           {/* <h1>NSL_KDD Imporvements</h1> */}
           <div  className='Nsl_Imp'>
            <img src='/photos/msg-678915148-40930 (1).jpg' class="img-fluid" alt='accI'/>
             <img src='/photos/msg-678915148-40929 (1).jpg'  class="img-fluid" alt='falsI'/> 
             <img src='/photos/photo1686224874.jpeg'  class="img-fluid" alt='falsI'/> 
           </div>
           

         </div>


    )

}
export default Graphs1;
import React, { useState } from 'react';
import axios from 'axios';
import {BrowserRouter, BrowserRouter as Router, Route, Routes, Switch} from 'react-router-dom' ;
import Profil from "./compo/pro";
import Predict from "./compo/predict";
import Final from "./compo/final";
import Initial from "./compo/initial";
import Corrdt from "./compo/Corr+DT";
import Home from "./compo/HOME";
import Rfchi2 from "./compo/RF+CH2";
import Rfenb from "./compo/RFE+NB";
import Improvement from "./compo/Improvement";
import Graphs1 from "./compo/Graphs1";
import Graphs2 from "./compo/Graphs2";



import './App.css';

const App = () => {

  return (

    <BrowserRouter>
    <Routes>
    <Route path="/pro" element = {<Profil/>}/>
    <Route path="/predict" element = {<Predict/>}/>
    <Route path="/" element = {<Home/>}/>
    <Route path="/initial" element = {<Initial/>}/>
    <Route path="/Final" element = {<Final/>}/>
    <Route path="/Corrdt" element = {<Corrdt/>}/>
    <Route path="/Rfchi2" element = {<Rfchi2/>}/>
    <Route path="/Rfenb" element = {<Rfenb/>}/>
    <Route path="/Improvement" element = {<Improvement/>}/>
    <Route path="/Graphs1" element = {<Graphs1/>}/>
    <Route path="/Graphs2" element = {<Graphs2/>}/>
   

    
    </Routes>
  
  </BrowserRouter>

  );
};

export default App;

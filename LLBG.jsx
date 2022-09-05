import React from 'react';
import "antd/dist/antd.css";
import "./styles.css";
import WeatherAPI from './weatherApi';

const LLBG =(props)=>{
    const[isActive3, setActive3]=React.useState(false)


    return(
    <div>
     <h1  style={{ backgroundColor:"black", color:"white",textAlign:"center"}}> ❓שלום</h1>

     <div class="card mb-3">
  
</div>     
<div class="card mb-3">
  <div class="card-body">
    <h5 class="card-title">LLBG - A.I.P/ בן גוריון </h5>
    <p class="card-text">שדה תעופה בן גוריון הוא שדה תעופה מרכזי בישראל  ושדה תעופה בנלאומי<br></br><a href="https://www.gov.il/en/Departments/General/electronic-aip" target="_blank">aip- Ben Gurion</a></p>
  </div>


    <h5 class="card-title">LLBG METAR TAF/📣 תחזית בן גוריון </h5>
    <br></br>
    <button class="btn btn-primary" onClick={()=>setActive3(!isActive3)}>{isActive3? "פחות... -":"עוד... +"}</button>
    {isActive3&& <p class="card-text" >{ <WeatherAPI  city="tel-aviv"></WeatherAPI>}</p>}

  </div>
</div>


)



     
}
export default LLBG;
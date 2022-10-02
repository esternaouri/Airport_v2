import React from 'react';
import "antd/dist/antd.css";
import "./styles.css";
import WeatherAPI from './weatherApi';

const LLBG =(props)=>{
    const[isActive3, setActive3]=React.useState(false)
//using API for weather to airport

    return(
      <div style={{ display :"flex", justifyContent:"center"}}>
    <div class="card shadow p-3 mb-5 bg-white rounded" style={{width: "50rem"}}>
     <h4 class=" text-center"> נמל תעופה בן גוריון </h4>
    <p class="text-center">שדה תעופה בן גוריון הוא שדה תעופה מרכזי בישראל  ושדה תעופה בנלאומי<br></br><a href="https://www.gov.il/en/Departments/General/electronic-aip" target="_blank">aip- Ben Gurion</a></p>
    <p class="card-title text-center">LLBG METAR TAF/ תחזית בן גוריון</p>
    <br></br>
    <button type="button" class="btn btn-success" onClick={()=>setActive3(!isActive3)}>{isActive3? "פחות ":"עוד "}</button>
    {isActive3&& <p class="card-text" >{ <WeatherAPI  city="haifa"></WeatherAPI>}</p>}

  

</div>

</div>
)



     
}
export default LLBG;
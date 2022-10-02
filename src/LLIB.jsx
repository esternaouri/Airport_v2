import React from 'react';
import "antd/dist/antd.css";
import "./styles.css";
import WeatherAPI from './weatherApi';

const LLIB =(props)=>{
    const[isActive4, setActive4]=React.useState(false)
////using API for weather to airport


    return(
<div style={{ display :"flex", justifyContent:"center"}}>
    <div class="card shadow p-3 mb-5 bg-white rounded" style={{width: "50rem"}}>
     <h4 class=" text-center"> נמל תעופה ראש פינה  </h4>
     <p class="text-center">שדה תעופה ראש פינה הוא שדה צפוני וקרוב לכנרת  - <br></br><a href="https://www.gov.il/BlobFolder/generalpage/roashpina-airport/he/aip_roshpina-llib.pdf" target="_blank">aip- Rosh Pina</a></p>
    <p class="card-title text-center">LLIB METAR TAF/ תחזית ראש פינה </p>
    <br></br>
    <button type="button" class="btn btn-success" onClick={()=>setActive4(!isActive4)}>{isActive4? "פחות ":"עוד "}</button>
    {isActive4&& <p class="card-text" >{ <WeatherAPI  city="haifa"></WeatherAPI>}</p>}

</div>

</div>


)



     
}
export default LLIB;
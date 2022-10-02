import React from 'react';
import "antd/dist/antd.css";
import "./styles.css";
import WeatherAPI from './weatherApi';

const LLHZ =()=>{
    const[isActive1, setActive1]=React.useState(false)

////using API for weather to airport

    return(
<div style={{ display :"flex", justifyContent:"center"}}>
    <div class="card shadow p-3 mb-5 bg-white rounded" style={{width: "50rem"}}>
     <h4 class=" text-center"> נמל תעופה הרצליה  </h4>
     <p class="text-center">שדה תעופה באיזור רעננה והרצליה, מיועד לאימוני טייסים צעירים ולטיסות  פנימיות <br></br><a href="https://www.gov.il/BlobFolder/generalpage/herzelia-airport/he/aip_herzliya-llhz1.pdf"  target="_blank">aip- Herzzelya</a></p>
    <p class="card-title text-center">LLHZ METAR TAF/ תחזית הרצליה </p>
    <br></br>
    <button type="button" class="btn btn-success" onClick={()=>setActive1(!isActive1)}>{isActive1? "פחות ":"עוד "}</button>
    {isActive1&& <p class="card-text" >{ <WeatherAPI  city="haifa"></WeatherAPI>}</p>}

</div>

</div>




)



     
}
export default LLHZ;
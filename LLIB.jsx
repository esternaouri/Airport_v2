import React from 'react';
import "antd/dist/antd.css";
import "./styles.css";
import WeatherAPI from './weatherApi';

const LLIB =(props)=>{
    const[isActive4, setActive4]=React.useState(false)


    return(
    <div><h1  style={{ backgroundColor:"black", color:"white",textAlign:"center"}}> טייס נכבד,</h1>
    <h4>לנוחותך, פרטים על שדה ראש פינה  להקלה על ההגעה ובהתאם להוראות בטיחות  בתעופה</h4>

     <div class="card mb-3">
  
</div>     
<div class="card mb-3">
  <div class="card-body">
    <h5 class="card-title">LLIB - A.I.P/ ראש פינה</h5>
    <p class="card-text">שדה תעופה ראש פינה הוא שדה צפוני וקרוב לכנרת  - <br></br><a href="https://www.gov.il/BlobFolder/generalpage/roashpina-airport/he/aip_roshpina-llib.pdf" target="_blank">aip- Rosh Pina</a></p>
  </div>

</div>
<div class="card-body">
    <h5 class="card-title">LLIB METAR TAF/📣 תחזית ראש פינה</h5>
    <br></br>
    <button type="button" class="btn btn-primary " onClick={()=>setActive4(!isActive4)}>{isActive4? "פחות...  -":"עוד...  +"}</button>
    {isActive4&& <p class="card-text" >{ <WeatherAPI  city="Tiberias"></WeatherAPI>}</p>}

  </div>
</div>

)



     
}
export default LLIB;
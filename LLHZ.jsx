import React from 'react';
import "antd/dist/antd.css";
import "./styles.css";
import WeatherAPI from './weatherApi';

const LLHZ =()=>{
    const[isActive1, setActive1]=React.useState(false)


    return(
    <div>
    <h1  style={{ backgroundColor:"black", color:"white",textAlign:"center"}}> טייס נכבד,</h1>
<h4>לנוחותך, פרטים על שדה הרצליה  להקלה על ההגעה ובהתאם להוראות בטיחות  בתעופה</h4>

     <div class="card mb-3">
  <div class="card-body">
    <h5 class="card-title">LLHZ - A.I.P / הרצליה</h5>
    <p class="card-text">שדה תעופה באיזור רעננה והרצליה, מיועד לאימוני טייסים צעירים ולטיסות  פנימיות <br></br><a href="https://www.gov.il/BlobFolder/generalpage/herzelia-airport/he/aip_herzliya-llhz1.pdf"  target="_blank">aip- Herzzelya</a></p>
  </div>
  </div>

  <div class="card-body">
    <h5 class="card-title">LLHZ METAR TAF/📣 תחזית הרצליה</h5>
    <br></br>
    <button type="button" class="btn btn-primary " onClick={()=>setActive1(!isActive1)}>{isActive1? "פחות...  -":"עוד...  +"}</button>
    {isActive1&& <p class="card-text" >{ <WeatherAPI  city="tel-aviv"></WeatherAPI>}</p>}

  </div>
</div>



)



     
}
export default LLHZ;
import React from 'react';
import "antd/dist/antd.css";
import "./styles.css";
import WeatherAPI from './weatherApi';

const LLHA =(props)=>{
    const[isActive2, setActive2]=React.useState(false)
//using API for weather to airport

    return(
    <div>
<h1  class="text-center"> טייס נכבד</h1>
<h4 class="text-center">לנוחותך, פרטים על שדה חיפה  להקלה על ההגעה ובהתאם להוראות בטיחות  בתעופה</h4>
     <div class="card mb-3 text-center">
  <div class="card-body">
    <h5 class="card-title">LLHA - A.I.P / חיפה</h5>
    <p class="card-text">שדה תעופה חיפה הוא צפוני, בעיר חיפה, הוא שדה תעופה בנלאומי- <br></br><a href="https://www.gov.il/BlobFolder/generalpage/haifa-airport/he/aip_haifa-llha.pdf" target="_blank">aip- haifa</a></p>
  </div>
</div>
<div class="card-body text-center card-body shadow-lg p-3 mb-5 bg-body rounded">
    <h5 class="card-title">LLHA METAR TAF/ 📣תחזית חיפה</h5>
    <br></br>
    <button class="btn btn-primary" onClick={()=>setActive2(!isActive2)}>{isActive2? "פחות... -":"עוד...  +"}</button>
    {isActive2&& <p class="card-text" >{ <WeatherAPI  city="haifa"></WeatherAPI>}</p>}

  </div>

</div>


)



     
}
export default LLHA;
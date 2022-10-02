import React from 'react';
import "antd/dist/antd.css";
import "./styles.css";
import WeatherAPI from './weatherApi';

const LLHA =(props)=>{
    const[isActive2, setActive2]=React.useState(false)
//using API for weather to airport

    return(
<div style={{ display :"flex", justifyContent:"center"}}>
    <div class="card shadow p-3 mb-5 bg-white rounded" style={{width: "50rem"}}>
     <h4 class=" text-center"> נמל תעופה חיפה  </h4>
     <p class="text-center">שדה תעופה חיפה הוא צפוני, בעיר חיפה, הוא שדה תעופה בנלאומי- <br></br><a href="https://www.gov.il/BlobFolder/generalpage/haifa-airport/he/aip_haifa-llha.pdf" target="_blank">aip- haifa</a></p>
    <p class="card-title text-center">LLHA METAR TAF/ תחזית חיפה</p>
    <br></br>
    <button type="button" class="btn btn-success" onClick={()=>setActive2(!isActive2)}>{isActive2? "פחות ":"עוד "}</button>
    {isActive2&& <p class="card-text" >{ <WeatherAPI  city="haifa"></WeatherAPI>}</p>}

</div>

</div>


)



     
}
export default LLHA;
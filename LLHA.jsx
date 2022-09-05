import React from 'react';
import "antd/dist/antd.css";
import "./styles.css";
import WeatherAPI from './weatherApi';

const LLHA =(props)=>{
    const[isActive2, setActive2]=React.useState(false)

    return(
    <div>
     <h1  style={{ backgroundColor:"black", color:"white",textAlign:"center"}}> ❓שלום</h1>

     <div class="card mb-3">
  <div class="card-body">
    <h5 class="card-title">LLHA - A.I.P / חיפה</h5>
    <p class="card-text">שדה תעופה חיפה הוא צפוני, בעיר חיפה, הוא שדה תעופה בנלאומי- <br></br><a href="https://www.gov.il/BlobFolder/generalpage/haifa-airport/he/aip_haifa-llha.pdf" target="_blank">aip- haifa</a></p>
  </div>
</div>
<div class="card-body">
    <h5 class="card-title">LLHA METAR TAF/ 📣תחזית חיפה</h5>
    <br></br>
    <button class="btn btn-primary" onClick={()=>setActive2(!isActive2)}>{isActive2? "פחות... -":"עוד...  +"}</button>
    {isActive2&& <p class="card-text" >{ <WeatherAPI  city="haifa"></WeatherAPI>}</p>}

  </div>

</div>


)



     
}
export default LLHA;
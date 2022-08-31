import React from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Card, Divider } from 'antd';
import WeatherAPI from './weatherApi';
import { Button } from 'antd/lib/radio';
            

const Two =(props)=>{
    
const[isActive1, setActive1]=React.useState(false)
const[isActive2, setActive2]=React.useState(false)
const[isActive3, setActive3]=React.useState(false)
const[isActive4, setActive4]=React.useState(false)
    return( 

<div className='bg-success'>
<h1 style={{backgroundColor:"black", color:"white",textAlign:"center"}}>🌨️🌤️ מזג אוויר ותנאי שיוט</h1>

<div class="card w-75">
  <div class="card-body">
    <h5 class="card-title">LLHZ METAR TAF/📣תחזית הרצליה</h5>
    <br></br>
    <button class="btn btn-primary" onClick={()=>setActive1(!isActive1)}>{isActive1? "פחות... -":"עוד...  +"}</button>
    {isActive1&& <p class="card-text" >{ <WeatherAPI  city="Herzliya"></WeatherAPI>}</p>}


    <div class="card w-75">
  <div class="card-body">
    <h5 class="card-title">LLHA METAR TAF/ 📣תחזית חיפה</h5>
    <br></br>
    <button class="btn btn-primary" onClick={()=>setActive2(!isActive2)}>{isActive2? "פחות... -":"עוד...  +"}</button>
    {isActive2&& <p class="card-text" >{ <WeatherAPI  city="haifa"></WeatherAPI>}</p>}

  </div>

  <div class="card w-75">
  <div class="card-body">
    <h5 class="card-title">LLBG METAR TAF/📣 תחזית בן גוריון </h5>
    <br></br>
    <button class="btn btn-primary" onClick={()=>setActive3(!isActive3)}>{isActive3? "פחות... -":"עוד... +"}</button>
    {isActive3&& <p class="card-text" >{ <WeatherAPI  city="tel-aviv"></WeatherAPI>}</p>}

  </div>
</div>


<div class="card w-75">
  <div class="card-body">
    <h5 class="card-title">LLIB METAR TAF/📣 תחזית ראש פינה</h5>
    <br></br>
    <button type="button" class="btn btn-primary " onClick={()=>setActive4(!isActive4)}>{isActive4? "פחות...  -":"עוד...  +"}</button>
    {isActive4&& <p class="card-text" >{ <WeatherAPI  city="Tiberias"></WeatherAPI>}</p>}

  </div>
</div>


</div>


  </div>
</div>

</div>



    )


}
export default Two;
import React from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Col, Divider } from 'antd';
import WeatherAPI from './weatherApi';
            

const Two =(props)=>{
    
const[isActive1, setActive1]=React.useState(false)
const[isActive2, setActive2]=React.useState(false)
const[isActive3, setActive3]=React.useState(false)
const[isActive4, setActive4]=React.useState(false)
    return( 
    <div>
    <h1 style={{marginLeft: "40%"}}>Metar- Taf</h1>
    <Divider
    direction="vertical"
    size="middle"
    style={{
      display: 'flex',
    }}
  > 
   
    <Col title="LLHZ METAR TAF" span={12} offset={6} onClick={()=>setActive1(!isActive1)}>
    {isActive2&& <div >{ <WeatherAPI  city="Herzliya"></WeatherAPI>}</div>}
    </Col>
    <Col title="LLBG METAR TAF" span={12} offset={6} onClick={()=>setActive1(!isActive1)}>
    {isActive3&& <div >{ <WeatherAPI  city="Tiberias"></WeatherAPI>}</div>}
    </Col>
    <Col title="LLIB METAR TAF" span={12} offset={6} onClick={()=>setActive1(!isActive1)}>
    {isActive4&& <div >{ <WeatherAPI  city="tel-aviv"></WeatherAPI>}</div>}
    </Col>
    
  </Divider>
  <div class="d-flex flex-column">
  <div class="p-2"> <Col title="LLHA METAR TAF" span={12} offset={6} onClick={()=>setActive1(!isActive1)}>
    {isActive1&& <div >{ <WeatherAPI  city="haifa"></WeatherAPI>}</div>}
    </Col></div>
  <div class="p-2">Flex item 2</div>
  <div class="p-2">Flex item 3</div>
</div>
<div class="d-flex flex-column-reverse">
  <div class="p-2">Flex item 1</div>
  <div class="p-2">Flex item 2</div>
  <div class="p-2">Flex item 3</div>
</div>
    </div>
    )

}
export default Two;
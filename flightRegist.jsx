import React, { useState, Fragment } from "react";
import "./styles.css";
import "antd/dist/antd.css";
import { Row, Col } from "antd";
import Products from "./pr"
import LLHA from './LLHA';
import LLHZ from './LLHZ';
import LLBG from './LLBG';
import LLIB from './LLIB';
const Fr=()=>{
return(
<div style={{width:"100%"}}>
<h1 style={{color:"white",backgroundColor:"black", textAlign:"center"}}> 🛂 שידור טיסות למודיעין הטייס</h1>
<div style={{display:"flex", flexWrap:"wrap"}}> <Products></Products> </div>

<h2 style={{ textAlign:"center"}}></h2>
<br></br>
<div class=" ontainer-sm card-text  bg-success" ><p style={{color:"white" ,textAlign:"center"}}>הטיסות נשלחות למודיעין הטיס, מייל עם אישור טיסה ישלח אוטומטי . יש לשמור ברקוד לביקרות</p></div>

    </div>
  );
}
export default Fr;
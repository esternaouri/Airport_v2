import React, { useState, Fragment } from "react";
import "./styles.css";
import "antd/dist/antd.css";
import Flights from "./pr"
//rendering all my components
const Fr=()=>{
return(
<div style={{width:"100%"}}>

<h1 style={{color:"white",backgroundColor:"black", textAlign:"center"}}> 馃泜 砖讬讚讜专 讟讬住讜转 诇诪讜讚讬注讬谉 讛讟讬讬住</h1>

 <Flights></Flights>
 

<h2 style={{ textAlign:"center"}}></h2>
<br></br>
<div class=" ontainer-sm card-text  bg-success" ><p style={{color:"white" ,textAlign:"center"}}>讛讟讬住讜转 谞砖诇讞讜转 诇诪讜讚讬注讬谉 讛讟讬住, 诪讬讬诇 注诐 讗讬砖讜专 讟讬住讛 讬砖诇讞 讗讜讟讜诪讟讬 . 讬砖 诇砖诪讜专 讘专拽讜讚 诇讘讬拽专讜转</p></div>

    </div>
  );
}
export default Fr;
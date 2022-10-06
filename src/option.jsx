import React from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { BrowserRouter as Router,Route,Link, Routes,BrowserRouter,Navigate,} from "react-router-dom";
import { useState } from 'react';


const OP = () => {
    //this is the airports option compopnents. whene you imsert one option you get details about the airport.
    //default is BEN GURION airpot.
       const[value,setValue]=React.useState("ben-Gurion");

return(
<div>

     <select onChange={(e)=>setValue(e.target.value)} value={value}>
        <option value={"ben-Gurion"}>ben-Gurion </option>
        <option value={"Herzzelya"}>Herzzelya</option>
        <option value={"Rosh-Pina"}>Rosh-Pina</option>
        <option value={"Haifa"}>Haifa</option>
        </select>   

      <ForLink value={value}></ForLink> 
    


</div>
);
}

const ForLink=(props)=>{
//attched a detail page for each airport.
if(props.value=="Herzzelya"){
    return(
        
        <Link to ="/flightRegist/LLHZ"><button type="button">נמל הרצליה
   </button> </Link>
    )
}
else if(props.value=="ben-Gurion"){
    return(
    <Link to ="/flightRegist/LLBG"><button type="button">נתב"ג 
    </button>  </Link>
    )
}
else if(props.value=="Rosh-Pina"){
    return(
    <Link to ="/flightRegist/LLIB"><button type="button">נמל ר"פ
    </button> </Link>
    )
}
else if(props.value=="Haifa"){
    return(
    <Link to ="/flightRegist/LLHA"> <button type="button">נמל חיפה
    </button>   </Link>
    )
}
}
export default OP;
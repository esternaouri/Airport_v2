import React from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { BrowserRouter as Router,Route,Link, Routes,BrowserRouter,Navigate,} from "react-router-dom";
import { useState } from 'react';


const OP = () => {
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

if(props.value=="Herzzelya"){
    return(
        <Link to ="/flightRegist/LLHZ">פרטים על הרצליה  </Link>
    )
}
else if(props.value=="ben-Gurion"){
    return(
    <Link to ="/flightRegist/LLBG">פרטים על בן גוריון  </Link>
    )
}
else if(props.value=="Rosh-Pina"){
    return(
    <Link to ="/flightRegist/LLIB">פרטים על ראש פינה </Link>
    )
}
else if(props.value=="Haifa"){
    return(
    <Link to ="/flightRegist/LLHA">פרטים על חיפה </Link>
    )
}
}
export default OP;
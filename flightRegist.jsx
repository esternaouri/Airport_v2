import React, { useState, Fragment } from "react";
import "./styles.css";
import "antd/dist/antd.css";
import { Row, Col } from "antd";
import UserTable from "./UserTable";
import AddUserForm from "./AddUser";
import Formy from "./form";
import Products from"./form2";

const Fr=()=>{
return(
<div>
      <div class=" ontainer-sm card-text  bg-success" ><p style={{color:"white" ,textAlign:"center"}}>הטיסות נשלחות למודיעין הטיס, מייל עם אישור טיסה ישלח אוטומטי . יש לשמור ברקוד לביקרות</p></div>
<Products></Products> 
<br></br>   
<br></br>
<div class=" ontainer-sm card-text  bg-dark" ><p style={{color:"white" ,textAlign:"center"}}>טיסות בטוחות</p></div>

    </div>
  );
}
export default Fr;
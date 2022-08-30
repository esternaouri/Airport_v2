import React, { useState, Fragment } from "react";
import "./styles.css";
import "antd/dist/antd.css";
import { Row, Col } from "antd";
import UserTable from "./UserTable";
import AddUserForm from "./AddUser";
import Formy from "./form";

export default function FlightRegist() {
  const usersData = [
    { id: 1, name: "Tania", username: "floppydiskette" },
    { id: 2, name: "Craig", username: "siliconeidolon" },
    { id: 3, name: "Ben", username: "benisphere" }
  ];
  const intialEditingUser = { id: "", name: "", username: "" };
  const [users, setUsers] = useState(usersData);
  const [currentUser, setcurrentUser] = useState(intialEditingUser);
  // addUser in component AddUserForm

  const addUser = user => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };
  const editingUser = user => {
    setcurrentUser({
      id: user.id,
      name: user.name,
      username: user.username
    });
  };

  //in component UserTable
  const onHandleDelete = userId => {
    if (currentUser.id === userId) {
      return;
    }
    setUsers(users.filter(user => user.id !== userId));
  };
  const updateUser = (id, updatedUser) => {
    setUsers(users.map(user => (user.id === id ? updatedUser : user)));
    setcurrentUser(updatedUser);
  };

  const clearUserEdit = () => {
    setcurrentUser(intialEditingUser);
  };
  return (
    <div className="container-sm" >
      <h1 style={{backgroundColor:"black", color:"white" ,textAlign:"center"}}>רישום טיסת ניווט למודיעין טייס</h1>
      <Row gutter={16}>
        <Col span={12}>
          
          <Fragment>
            <h2>{currentUser.id ? "עדכון טיסה קיימת " : "רישום טיסה חדשה "}</h2>
            <AddUserForm
              addUser={addUser}
              editUser={currentUser}
              updateUser={updateUser}
              clearUser={clearUserEdit}
            />
          </Fragment>
      <Formy></Formy>

        </Col>
        <Col span={12}>
          <h2 style={{textAlign: "center"}}>טיסות מעודכנות</h2>
          <UserTable
            users={users}
            onDeleted={onHandleDelete}
            editUser={editingUser}
          />
        </Col>
      </Row>
      <div class=" card-text  bg-success" ><p style={{color:"white" ,textAlign:"center"}}>הטיסות נשלחות למודיעין הטיס, מייל עם אישור טיסה ישלח אוטומטי . יש לשמור ברקוד לביקרות</p></div>
      
    </div>
  );
}

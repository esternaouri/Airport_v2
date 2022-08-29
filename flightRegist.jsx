import React, { useState, Fragment } from "react";
import "./styles.css";
import "antd/dist/antd.css";
import { Row, Col } from "antd";
import UserTable from "./UserTable";
import AddUserForm from "./AddUser";

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
    <div className="App">
      <h1>CRUD App with Hooks</h1>
      <Row gutter={16}>
        <Col span={12}>
          <Fragment>
            <h2>{currentUser.id ? "Update user" : "Add USer"}</h2>
            <AddUserForm
              addUser={addUser}
              editUser={currentUser}
              updateUser={updateUser}
              clearUser={clearUserEdit}
            />
          </Fragment>
        </Col>
        <Col span={12}>
          <h2>View users</h2>
          <UserTable
            users={users}
            onDeleted={onHandleDelete}
            editUser={editingUser}
          />
        </Col>
      </Row>
    </div>
  );
}

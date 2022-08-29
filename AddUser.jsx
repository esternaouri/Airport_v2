import React, { useState, useEffect } from "react";
import { Form, Input, Icon, Button } from "antd";

const AddUserForm = ({ form, editUser, addUser, updateUser, clearUser }) => {
  const initialFormAdd = {
    id: null,
    name: "",
    username: ""
  };

  const [user, setUser] = useState(initialFormAdd);
  //const keys = form.getFieldValue('keys');

  const { getFieldDecorator } = form;
  useEffect(() => {
    console.log("run efect");
    setUser(editUser);
  }, [editUser]);

  // const update = () =>{
  //   props.form.setFieldsValue({[keys]: user[keys]});
  // }
  const handleInputChange = e => {
    const { name, value } = e.target;

    setUser({ ...user, [name]: value });
    console.log(user);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (!user.id) {
      if (!user.name || !user.username) return;

      addUser(user);
      setUser(initialFormAdd);
    } else {
      updateUser(user.id, user);
    }
  };
  return (
    <Form layout="inline" onSubmit={handleSubmit}>
      <Form.Item>
        {getFieldDecorator("name", {
          rules: [{ required: true, message: "Please input your user!" }]
          //  onChange: handleInputChange
        })(
          <Input
            prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
            placeholder="User"
            name="name"
            //  value={user.name}
            onChange={handleInputChange}
          />
        )}
      </Form.Item>
      <Form.Item>
        {getFieldDecorator("username", {
          rules: [{ required: true, message: "Please input your user!" }]
          // value: user.username
          // onChange: handleInputChange
        })(
          <Input
            prefix={
              <Icon type="username" style={{ color: "rgba(0,0,0,.25)" }} />
            }
            placeholder="UserName"
            name="username"
            onChange={handleInputChange}
          />
        )}
      </Form.Item>

      {user.id ? (
        <div>
          <Button htmlType="submit">Update user</Button>
          <Button onClick={() => clearUser()}>Cancel</Button>
        </div>
      ) : (
        <Button htmlType="submit">Add new user</Button>
      )}
    </Form>
  );
};

export default Form.create()(AddUserForm);

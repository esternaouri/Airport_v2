import React, { useState } from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { TimePicker } from 'antd';
import moment from 'moment';
import {
  Button,
  Cascader,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Switch,
  TreeSelect,
} from 'antd';


const Formy = () => {
  const [componentSize, setComponentSize] = useState('default');

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
  const [inputs, setInputs] = React.useState({});
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }
  const handleSubmit = (event) => {
    console.log(event)
    for(let i=0; i<=10; i++)
    event.preventDefault();
    //setAllflights(Allflights => [...Allflights, inputs]);
  }
  const [Allflights, setAllflights] = React.useState([]);

  return (
<div>
    <Form onFinish={handleSubmit}
      labelCol={{
        span: 4,
      }}
      wrapperCol={{
        span: 14,
      }}
      layout="horizontal"
      initialValues={{
        size: componentSize,
      }}
      onValuesChange={onFormLayoutChange}
      size={componentSize}
      onSubmit={handleSubmit}>
      <Form.Item name = "arcftype" label="סוג מטוס">
        <Cascader onChange={handleChange}
          options={[
          {
                  value: 'CESSNA 172',
                  label: 'CESSNA 172',
               
            }
         ,
            {

                    value: 'DA-40 ',
                    label: 'DA-40',
                  
        },{
                   value: 'BOEING 787 ',
                    label: 'BOEING 787',
                  
    },{   
                    value: 'PEPPER BA',
                    label: 'PEPPER BA'
    }          ,{
                    value: 'AIRBUS A380',
                    label: 'AIRBUS A380',
    }
                  
                
           ,
          ]}
        />
      </Form.Item>
      <Form.Item name="arcfid" label="מספר רישום מטוס">
        <Input />
      </Form.Item>
      <Form.Item name="date" label=" תאריך וזמן ליעד">
        <DatePicker />
        <TimePicker  defaultOpenValue={moment('00:00:00', 'HH:mm:ss')} />

      </Form.Item >
      <Form.Item name="deprture"label="מקום המראה">
        <Input />
      </Form.Item><Form.Item name="destination"label="מקום נחיתה">
        <Input />
      </Form.Item ><Form.Item name="time" label="משך הטיסה">
        <Input />
      </Form.Item ><Form.Item name="fuel" label="דלק נדרש">
        <Input />
      </Form.Item>
      
      <Form.Item label="Button">
        <Button block type='primary' htmlType='submit'>הדפסת טיסה</Button>
      </Form.Item>
     
      </Form>

</div>
  );
};

export default  Formy;
import React from 'react';
import { Form, Input } from 'antd';
import Button from './button/Button';

const FormAuth = ({ onFinish, onFinishFailed }) => {
  return (
    <Form
      className='w-[400px]'
      layout='vertical'
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete='off'
    >
      <Form.Item
        label='Username'
        name='username'
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input size='large' />
      </Form.Item>

      <Form.Item
        label='Password'
        name='password'
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password size='large' />
      </Form.Item>

      <Button type={"submit"} onClick={()=>console.log("Login")} wFull >Login</Button>
    </Form>
  );
};

export default FormAuth;

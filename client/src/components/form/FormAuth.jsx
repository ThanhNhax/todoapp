import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';

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

      <Button
        className='w-full bg-orange-400 text-xl font-bold  h-full hover:bg-orange-600'
        type='primary'
        htmlType='submit'
      >
        Login
      </Button>
    </Form>
  );
};

export default FormAuth;

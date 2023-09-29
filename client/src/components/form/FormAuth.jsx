import React from 'react';
import { Form, Input } from 'antd';
import Button from './button/Button';

const FormAuth = ({ onFinish, onFinishFailed, isRegister }) => {
  console.log(isRegister)
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
      {isRegister && (
        <Form.Item
          label='Name'
          name='name'
          rules={[
            {
              required: true,
              message: 'Please input your name!',
            },
          ]}
        >
          <Input size='large' />
        </Form.Item>
      )}
      <Form.Item
        label='Email'
        name='email'
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input type='email' size='large' />
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

      <Button type={'submit'} wFull>
        {isRegister?"Register":'Login'}
      </Button>
    </Form>
  );
};

export default FormAuth;

import React from 'react';
import FormAuth from '../components/form/FormAuth';
import { Card } from 'antd';
const { Meta } = Card;
const Login = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div className='w-full h-full flex flex-col justify-center items-center mt-20'>
      <h2 className='text-3xl font-bold my-5 text-center'>
        Sign in to your account
      </h2>
      <Card className='shadow-xl mt-5'>
        <FormAuth onFinish={onFinish} onFinishFailed={onFinishFailed} />
        <div className='mt-6 '>
          <div className='relative'>
            <div className='absolute inset-0 flex items-center'>
              <div className='w-full border-t border-orange-300' />
            </div>
            <div className='relative flex justify-center text-sm'>
              <span className='bg-white px-2 text-orange-500'>
                Or continue with
              </span>
            </div>
          </div>
        </div>
        
      </Card>
    </div>
  );
};

export default Login;

import React, { useState } from 'react';
import FormAuth from '../components/form/FormAuth';
import { Card, message } from 'antd';
import Button from '../components/form/button/Button';
import { AiFillGithub, AiFillGoogleCircle } from 'react-icons/ai';
import { loginApi, registerApi } from '../api/api.users';

const Login = () => {
  const loginUser = async (val) => {
    try {
      const data = await loginApi(val);
      data.token && message.success("Logged in successfully!");
    } catch (e) {
      message.error(e);
    }
  };
  const onFinish = async (values) => {
    console.log('Success:', values);
    //if value co key name thi call api register
    //register
    if (values.name) {
      try {
        console.log('register');
        const data = await registerApi(values);
        message.success(data.message);
      } catch (err) {
        console.log(err.response.data.error.sqlMessage);
        message.error(err.response.data.error.sqlMessage);
      }
    }
    // login
    loginUser(values)
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  const [isRegister, setIsRegister] = useState(true);
  console.log('isRegister:', isRegister);
  return (
    <div className='w-full h-full flex flex-col justify-center items-center mt-20'>
      <h2 className='text-3xl font-bold my-5 text-center'>
        Sign in to your account
      </h2>
      <Card className='shadow-xl mt-5'>
        <FormAuth
          isRegister={!isRegister}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        />
        {/* Đường kẻ ngang or continue with */}

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

        {/* Button login với phương thức khác */}
        <div className='mt-6 flex gap-4'>
          <Button type={'button'} wFull icon={AiFillGithub}></Button>
          <Button type={'button'} wFull icon={AiFillGoogleCircle}></Button>
        </div>
        <div className='mt-6 text-center'>
          <span
            className='text-lg text-orange-400 cursor-pointer underline hover:text-orange-600'
            onClick={() => setIsRegister(!isRegister)}
          >
            {isRegister ? 'Create an account' : 'Login'}
          </span>
        </div>
      </Card>
    </div>
  );
};

export default Login;

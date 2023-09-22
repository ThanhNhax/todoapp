import React, { useEffect, useState } from 'react';
import { Button, Input } from 'antd';
import { getAllDemo } from '../api/demo';
const DemoApi = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleFirstName = (e) => {
    setFirstName(e.target.value);
  };
  const handleLastName = (e) => {
    setLastName(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      firstName,
      lastName,
    });
  };
  useEffect(() => {
    // call api  get data
    getAllDemo()
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className='container mt-4'>
      <form>
        <Input
          className='mb-2'
          placeholder='Enter First name? '
          value={firstName}
          onChange={handleFirstName}
        />
        <Input
          className='mb-2'
          placeholder='Enter Last name? '
          value={lastName}
          onChange={handleLastName}
        />
        <Button onClick={handleSubmit} type='primary'>
          Submit
        </Button>
      </form>
    </div>
  );
};

export default DemoApi;

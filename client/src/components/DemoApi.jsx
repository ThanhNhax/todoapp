import React, { useEffect, useState } from 'react';
import { Button, Input } from 'antd';
import { addTodo, getAllDemo, removeTodo } from '../api/demo';
const DemoApi = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [data, setData] = useState([]);
  console.log({ data });
  const handleFirstName = (e) => {
    setFirstName(e.target.value);
  };
  const handleLastName = (e) => {
    setLastName(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log({
      firstName,
      lastName,
    });
    if (firstName !== ' ' && lastName !== ' ') {
      await addTodo({ firstName, lastName });
      getAllDemo()
        .then((data) => setData(data))
        .catch((error) => console.log(error));
    }
  };
  useEffect(() => {
    // call api  get data
    getAllDemo()
      .then((data) => setData(data))
      .catch((error) => console.log(error));
  }, []);

  const handleDelete = async (id) => {
    console.log({ id });
    const indexDel = data.findIndex((item) => item.id === id);
    console.log({ indexDel });

    if (!(indexDel < -1)) {
      const newData = [...data];
      newData.splice(indexDel, 1);
      setData(newData);
      const result = await removeTodo(id);
      console.log({ result });
    }
  };
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

      <div className=''>
        <table className='table'>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {data &&
              data.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.first_name}</td>
                  <td>{item.last_name}</td>
                  <td>
                    <Button danger onClick={() => handleDelete(item.id)}>
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DemoApi;

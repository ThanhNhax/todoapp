import React, { useCallback, useState } from 'react';
import { Input, List } from 'antd';
import TodoItem from './TodoItem';
const TodoApp = () => {
  const todo = {
    id: 1,
    title: 'Todo',
    isCompleted: true,
  };
  const [newTodo, setNewTodo] = useState('');
  const [arrTodo, setArrTodo] = useState([
    {
      title: 'new Todo',
      isCompleted: true,
    },
  ]);
  console.log({ arrTodo });
  const handleChangeTodo = useCallback(
    (e) => {
      setNewTodo(e.target.value);
    },
    [newTodo]
  );

  const addTodo = (todo) => {
    if (todo) {
      setArrTodo([...arrTodo, { title: todo, isCompleted: false }]);
      setNewTodo('');
    }
    return;
  };
  const handeRemove = (id) => {
    const newArrTodo = [...arrTodo];
    newArrTodo.splice(id, 1);
    setArrTodo(newArrTodo);
  };
  const handleChange  = (callback) => {
    callback
};
  return (
    <div className='todoContainer'>
      <h1>TODO App</h1>
      <Input
        placeholder='What needs to be done?'
        value={newTodo}
        onChange={handleChangeTodo}
        onPressEnter={() => addTodo(newTodo)}
      />
      <div
        style={{
          marginTop: '24px',
        }}
      >
        <List
          bordered
          dataSource={arrTodo}
          renderItem={(item, index) => (
            <TodoItem
              key={index}
              todo={item}
              handleRemove={() => handeRemove(index)}
              handleCheck={() => handleChange}
            />
          )}
        />
      </div>
    </div>
  );
};

export default TodoApp;

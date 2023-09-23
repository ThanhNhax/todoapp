import React, { Children, useCallback, useEffect, useState } from 'react';
import { Input, List, message } from 'antd';
import TodoItem from './TodoItem';
import { addTodo, getAllTodos, removeTodoApi } from '../api/api.todoapp';
const TodoApp = () => {
  const [newTodo, setNewTodo] = useState('');
  const [arrTodo, setArrTodo] = useState([]);
  console.log({ arrTodo });

  const handleChangeTodo = useCallback(
    (e) => {
      setNewTodo(e.target.value);
    },
    [newTodo]
  );

  const handeleAddTodo = async (todo) => {
    if (todo) {
      setArrTodo([...arrTodo, { title: todo, isCompleted: false }]);
      setNewTodo('');
      // call api addTodo len server
      const data = await addTodo({ title: todo, isCompleted: false });
      message.success(data);
    }
    return;
  };
  const handeRemove = async (id) => {
    const newArrTodo = [...arrTodo];
    newArrTodo.splice(id, 1);
    setArrTodo(newArrTodo);
    // call api remove todo by id
    const data = await removeTodoApi(id);
    message.success(data.message);
  };
  const handleTodoComplete = (todoId) => {
    const updatedTodos = [...arrTodo];
    const index = arrTodo.findIndex((todo) => todo.id === todoId);
    const itemUpdate = { ...arrTodo[index] };
    itemUpdate.is_completed = itemUpdate.is_completed === 1 ? 0 : 1;
    updatedTodos[index] = itemUpdate;
    console.log({ updatedTodos });
    setArrTodo(updatedTodos);
  };

  useEffect(() => {
    getAllTodos()
      .then((todos) => setArrTodo(todos))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className='todoContainer'>
      <h1>TODO App</h1>
      <Input
        placeholder='What needs to be done?'
        value={newTodo}
        onChange={handleChangeTodo}
        onPressEnter={() => handeleAddTodo(newTodo)}
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
              onComplete={handleTodoComplete}
            />
          )}
        />
      </div>
    </div>
  );
};

export default TodoApp;

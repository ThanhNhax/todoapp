import React, { useCallback, useEffect, useState } from 'react';
import { Input, List, message } from 'antd';
import TodoItem from './TodoItem';
import {
  addTodo,
  getAllTodos,
  removeTodoApi,
  updateTodoApi,
} from '../api/api.todoapp';
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
    console.log({ id });
    const newArrTodo = [...arrTodo];
    const indexDelete = arrTodo.findIndex((todo) => todo.id === id);
    newArrTodo.splice(indexDelete, 1);
    setArrTodo(newArrTodo);
    // call api remove todo by id
    const data = await removeTodoApi(id);
    message.success(data.message);
  };
  const handleTodoComplete = async (todoId) => {
    console.log(todoId);
    const index = arrTodo.findIndex((todo) => todo.id === todoId);
    const itemUpdate = {
      ...arrTodo[index],
      is_completed: arrTodo[index].is_completed === 1 ? 0 : 1,
    };
    const arrUpdate = [...arrTodo];
    arrUpdate[index] = itemUpdate;
    setArrTodo(arrUpdate);
    // all api patch todo
    try {
      const data = await updateTodoApi(itemUpdate);
      console.log(data);
      message.success('Checked for updates!');
    } catch (err) {
      console.log(err);
    }
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
              handleRemove={() => handeRemove(item.id)}
              onComplete={handleTodoComplete}
            />
          )}
        />
      </div>
    </div>
  );
};

export default TodoApp;

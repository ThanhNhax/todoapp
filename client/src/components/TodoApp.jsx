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
  const handleTodoComplete = async (check, todoId) => {
    console.log(todoId);
    const index = arrTodo.findIndex((todo) => todo.id === todoId);
    const itemUpdate = {
      ...arrTodo[index],
      is_completed: check,
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
  const handleEditTitles = async (val) => {
    const indexEdit = arrTodo.findIndex((todo) => todo.id === val.id);
    const updateArrTodo = [...arrTodo];
    updateArrTodo[indexEdit] = val;
    console.log({ updateArrTodo });
    setArrTodo(updateArrTodo);
    // call api update todo
    try {
      const data = await updateTodoApi(val);
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

  const numberTodoDone = arrTodo.filter((todo) => todo.is_completed).length;
  const numberComplete = arrTodo.length;

  const getMessage = () => {
    const percentage = (numberTodoDone / numberComplete) * 100;
    if (percentage === 0) {
      return 'Try to do at least one! 🙏';
    }
    if (percentage === 100) {
      return 'Nice job for today! 🏖';
    }
    return 'Keep it going 💪🏻';
  };
  return (
    <div className='app-todo'>
      <div className='todoContainer'>
        <h1>
          {numberTodoDone}/{numberComplete} Complete &#129470;
        </h1>
        <h2>{getMessage()}</h2>
        <Input
          className='input-form py-2'
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
                onSubmitEditTitle={handleEditTitles}
              />
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default TodoApp;

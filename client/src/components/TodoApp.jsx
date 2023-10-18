import React, { useCallback, useContext, useEffect, useState } from 'react';
import { Card, Input, List, message } from 'antd';
import TodoItem from './TodoItem';
import {
  addTodo,
  getAllTodosByUser,
  removeTodoApi,
  updateTodoApi,
} from '../api/api.todoapp';
import UserContext from '../hooks/UserContext';
const TodoApp = () => {
  const [newTodo, setNewTodo] = useState('');
  const [arrTodo, setArrTodo] = useState([]);
  console.log({ arrTodo });
  const user = JSON.parse(useContext(UserContext));
  const handleChangeTodo = useCallback(
    (e) => {
      setNewTodo(e.target.value);
    },
    [newTodo]
  );

  const handeleAddTodo = async (todo) => {
    try {
      if (todo) {
        arrTodo
          ? setArrTodo([
              ...arrTodo,
              { title: todo, isCompleted: false, userId: user.id },
            ])
          : setArrTodo(
              new Array({ title: todo, isCompleted: false, userId: user.id })
            );

        setNewTodo('');
        // call api addTodo len server
        const data = await addTodo({
          title: todo,
          isCompleted: false,
          userId: user.id,
        });
        message.success(data);
      }
    } catch (e) {
      console.log({ error: e });
    }
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
  const handleTodoComplete = async (check, todoCheck) => {
    const index = arrTodo.findIndex((todo) => todo.id === todoCheck.id);
    const itemUpdate = {
      ...arrTodo[index],
      is_completed: check,
    };
    const arrUpdate = [...arrTodo];
    arrUpdate[index] = itemUpdate;
    setArrTodo(arrUpdate);
    // all api patch todo
    try {
      await updateTodoApi(itemUpdate);
      message.success('Checked for updates!');
      getAllTodosByUser()
        .then((todos) => setArrTodo(todos))
        .catch((err) => console.log(err));
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
    getAllTodosByUser()
      .then((todos) => setArrTodo(todos))
      .catch((err) => console.log(err));
  }, []);

  const numberTodoDone = arrTodo
    ? arrTodo.filter((todo) => todo.is_completed).length
    : 0;
  const numberComplete = arrTodo ? arrTodo.length : 0;

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
    <Card className='container mx-auto w-full mt-4 md:max-w-xl text-center shadow-md'>
      <h1 className='text-2xl font-bold'>
        {numberTodoDone}/{numberComplete} Complete &#129470;
      </h1>
      <h2 className='text-xl font-medium mb-4'>{getMessage()}</h2>
      <Input
        placeholder='What needs to be done?'
        value={newTodo}
        onChange={handleChangeTodo}
        onPressEnter={() => handeleAddTodo(newTodo)}
      />
      <div className='mt-4'>
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
    </Card>
  );
};

export default TodoApp;

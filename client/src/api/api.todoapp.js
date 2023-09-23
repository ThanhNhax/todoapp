import axios from 'axios';
export const getAllTodos = async () => {
  const result = await axios.get('http://localhost:6060/api/todos');
  return result.data;
};

export const addTodo = async (todo) => {
  const result = await axios.post(
    'http://localhost:6060/api/todos/create',
    todo
  );
  return result.data;
};

export const removeTodoApi = async (id) => {
  const result = await axios.delete(`http://localhost:6060/api/todos/${id}`);
  return result.data;
};

export const updateTodoApi = async (todo) => {
  const result = await axios.patch(
    `http://localhost:6060/api/todos/${todo.id}`,
    { is_completed: todo.is_completed }
  );
};

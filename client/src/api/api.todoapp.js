import { axiosConfig } from '../utils/configAxios/configAxios';
export const getAllTodosByUser = async () => {
  const user = await localStorage.getItem(process.env.REACT_APP_KEY_LOCAL);
  const parseUser = await JSON.parse(user);
  const result = await axiosConfig.get(`/todos/${parseUser.id}`);
  return result.data;
};

export const addTodo = async (todo) => {
  const result = await axiosConfig.post('/todos/create', todo);
  return result.data;
};

export const removeTodoApi = async (id) => {
  const result = await axiosConfig.delete(`/todos/${id}`);
  return result.data;
};

export const updateTodoApi = async (todo) => {
  console.log(todo);
  const result = await axiosConfig.patch(`/todos/${todo.id}`, {
    id: todo.id,
    title: todo.title,
    is_completed: todo.is_completed,
  });
  return result.data;
};

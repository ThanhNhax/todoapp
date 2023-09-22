import axios from 'axios';
export const getAllDemo = async () => {
  const data = await axios.get('http://localhost:6060/api/show/todos');
  return data.data;
};

export const addTodo = async (todo) => {
  const data = await axios.post('http://localhost:6060/api/create/todo', todo);
  return data;
};
export const removeTodo = async (id) =>{
    const data = await axios.delete(`http://localhost:6060/api/todo/${id}`);
    return data;
} 
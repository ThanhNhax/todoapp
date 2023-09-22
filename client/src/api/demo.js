import axios from 'axios'
export const getAllDemo = async ()=>{
    const data = await axios.get('http://localhost:6060/api/show/todos');
    return data.data
}
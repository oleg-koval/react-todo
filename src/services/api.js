import axios from 'axios'

export async function getTodosFromApi() {
  const { data } = await axios.get(
    'https://jsonplaceholder.typicode.com/todos',
    {
      params: {
        _limit: 10,
      },
    },
  )
  return data;
}

export async function deleteFromApi(id) {
  try {
    await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
  } catch {
    throw new Error('something went wrong deleting or whatever')
  }
}

export async function addTodoToApi(todo) {
  const { data } = await axios.post(
    'https://jsonplaceholder.typicode.com/todos',
    todo
  );
  return data;
}

import getTodo from './getTodo.js';

const inputListTodo = async () => {
  const todo = await getTodo();
  if (!todo.length) {
    console.log('Список задач пуст!');
    return;
  }

  let inputString = 'Список задач:\n';

  for (const task of todo) {
    inputString += `${task.id}. [${task.status}] ${task.task}\n`;
  }

  console.log(inputString);
};

export default inputListTodo;

import getTodo from './getTodo.js';

const getTask = async (id: number) => {
  const todo = await getTodo();
  const task = todo.find(i => i.id === id);

  if (task) {
    console.log(`${task.id}. [${task.status}] ${task.task}`);
  } else {
    console.log(`Задача с идентификатором ${id} не найдена`);
  }
};

export default getTask;

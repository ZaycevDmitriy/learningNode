import getTodo from './getTodo.js';
import writeFileData from '../actionsFile/writeFileData.js';

export const addTask = async (task: string) => {
  const todo = await getTodo();
  const id = todo.length + 1;

  todo.push({
    id,
    task,
    status: 'В работе',
  });

  await writeFileData(todo);
  console.log(`Задача добавлена с идентификатором ${id}`);
};

export default addTask;

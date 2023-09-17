import getTodo from './getTodo.js';
import writeFileData from '../actionsFile/writeFileData.js';
import { ITask } from '../../util/interface.js';

export const deleteTask = async (id: number) => {
  const todo = await getTodo();
  let noTaskById = true;
  let newId = 1;

  const newTodoList = todo.reduce<ITask[]>((acc, task) => {
    if (task.id !== id) {
      acc.push({ ...task, id: newId });
      newId++;
    }
    if (task.id === id) {
      noTaskById = false;
    }
    return acc;
  }, []);

  await writeFileData(newTodoList);

  if (noTaskById) {
    console.log(`Задача с идентификатором ${id} не найдена`);
  } else {
    console.log(`Задача с идентификатором ${id} удалена`);
  }
};

export default deleteTask;

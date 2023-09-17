import getTodo from './getTodo.js';
import { ITask } from '../../util/interface.js';
import writeFileData from '../actionsFile/writeFileData.js';
import addTask from './addTask.js';

const updateTask = async (id: number, task?: string) => {
  if (!task) {
    console.log('Нет описания задачи');
    return;
  }
  const todo = await getTodo();
  let noTaskById = true;

  const newTodoList = todo.reduce<ITask[]>((acc, item) => {
    if (item.id === id) {
      acc.push({ ...item, task });
      noTaskById = false;
    } else {
      acc.push(item);
    }
    return acc;
  }, []);

  await writeFileData(newTodoList);

  if (noTaskById) {
    console.log(`Задача с идентификатором ${id} не найдена`);
    await addTask(task);
  } else {
    console.log(`Задача с идентификатором ${id} обновлена`);
  }
};

export default updateTask;

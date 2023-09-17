import getTodo from './getTodo.js';
import writeFileData from '../actionsFile/writeFileData.js';
import { ITask } from '../../util/interface.js';

const updateStatus = async (id: number, status?: string) => {
  if (!status) {
    console.log('Не указан статус задачи');
    return;
  }

  const todo = await getTodo();

  const newTodo = todo.map<ITask>(item => {
    if (item.id === id) {
      return { ...item, status };
    } else {
      return item;
    }
  });

  await writeFileData(newTodo);
};

export default updateStatus;

import { writeFile } from 'node:fs/promises';
import { IData, ITask } from '../../util/interface.js';

const writeFileData = async (todo?: ITask[]) => {
  const data: IData = { todo: [] };
  if (todo) {
    data.todo = todo;
  }
  await writeFile('./data.json', JSON.stringify(data), {
    encoding: 'utf8',
  });
};

export default writeFileData;

import { writeFile } from 'node:fs/promises';
import { IData, ITask } from '../../util/interface.js';
import { pathFileTodo } from './getPathToDir.js';

const writeFileData = async (todo?: ITask[]) => {
  try {
    const data: IData = { todo: [] };
    if (todo) {
      data.todo = todo;
    }
    await writeFile(pathFileTodo, JSON.stringify(data), {
      encoding: 'utf8',
    });
  } catch (e) {
    console.log(e);
  }
};

export default writeFileData;

import readFileData from '../actionsFile/readFileData.js';
import { IData } from '../../util/interface.js';

const getTodo = async () => {
  let data: IData = { todo: [] };
  const jsonStr = await readFileData();
  if (jsonStr) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    data = JSON.parse(jsonStr);
  }
  return data.todo;
};

export default getTodo;

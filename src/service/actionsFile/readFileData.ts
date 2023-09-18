import { readFile } from 'node:fs/promises';
import writeFileData from './writeFileData.js';
import { pathFileTodo } from './getPathToDir.js';

const readFileData = async (): Promise<string | undefined> => {
  try {
    return await readFile(pathFileTodo, { encoding: 'utf8' });
  } catch (e) {
    await writeFileData();
  }
};

export default readFileData;

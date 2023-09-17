import { readFile } from 'node:fs/promises';
import writeFileData from './writeFileData.js';

const readFileData = async (): Promise<string | undefined> => {
  try {
    return await readFile('./data.json', { encoding: 'utf8' });
  } catch (e) {
    await writeFileData();
  }
};

export default readFileData;

import { homedir } from 'node:os';
import { join } from 'node:path';

export const pathFileTodo = join(homedir(), 'data.json');

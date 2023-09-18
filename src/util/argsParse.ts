import currentId from './currentId.js';
import inputHelp from '../service/inputHelp.js';
import inputListTodo from '../service/actionsToDo/inputListTodo.js';
import addTask from '../service/actionsToDo/addTask.js';
import deleteTask from '../service/actionsToDo/deleteTask.js';
import updateTask from '../service/actionsToDo/updateTask.js';
import getTask from '../service/actionsToDo/getTask.js';
import updateStatus from '../service/actionsToDo/updateStatus.js';

type IArgsParse = string[];

const argsParse = async ([, , ...argv]: IArgsParse) => {
  const [command, ...values] = argv;

  switch (command) {
    case 'add':
      await addTask(values[0]);
      break;
    case 'delete':
      await currentId(values[0], deleteTask);
      break;
    case 'update':
      await currentId(values[0], updateTask, values[1]);
      break;
    case 'list':
      await inputListTodo();
      break;
    case 'get':
      await currentId(values[0], getTask);
      break;
    case 'status':
      await currentId(values[0], updateStatus, values[1]);
      break;
    case 'help':
    default:
      inputHelp();
  }
};

export default argsParse;

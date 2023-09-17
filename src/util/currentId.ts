import isNumeric from './isNumeric.js';

export const currentId = async (
  idSting: string,
  callback: (id: number, massage?: string) => Promise<void>,
  massage?: string,
) => {
  if (isNumeric(idSting)) {
    const taskId = parseInt(idSting);
    await callback(taskId, massage);
  } else {
    console.log('Неправильный id задачи');
  }
};

export default currentId;

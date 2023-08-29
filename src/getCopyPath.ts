const isNotPoint = (value: string) => value !== '.';

const getCopyPath = (
  currentPath: string,
  startCurrentPath: string,
  startCopyPath: string,
) => {
  const startCurrentPathName = startCurrentPath.split('/').find(isNotPoint);
  const startCopyPathName = startCopyPath.split('/').find(isNotPoint);

  if (startCurrentPathName && startCopyPathName) {
    const arrayPath = currentPath.split('/');
    const arrayCopyPath = arrayPath.map(i => {
      if (i === startCurrentPathName) {
        return startCopyPathName;
      }
      return i;
    });
    return arrayCopyPath.join('/');
  } else {
    throw new Error('Некорректные пути исходной или целевой директории');
  }
};

export default getCopyPath;

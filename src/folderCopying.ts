import { copyFile, mkdir, readdir } from 'node:fs/promises';
import * as path from 'node:path';
import getCopyPath from './getCopyPath.js';

const folderCopying = (
  sourceDir: string,
  targetDir: string,
  callback: (args: unknown) => void,
) => {
  void (async () => {
    await mkdir(targetDir, { recursive: true });
    const traverseDir = async (dirPath: string) => {
      // eslint-disable-next-line no-useless-catch
      try {
        const dirEntries = await readdir(dirPath, { withFileTypes: true });
        dirEntries.sort((a, b) => a.name.localeCompare(b.name, ['en', 'ru']));

        for (const dirEntry of dirEntries) {
          const fileName = dirEntry.name;
          const pathName = path.join(dirPath, fileName);
          const copyPath = getCopyPath(pathName, sourceDir, targetDir);

          if (copyPath) {
            if (dirEntry.isFile()) {
              await copyFile(pathName, copyPath);
              return;
            }
            if (dirEntry.isDirectory()) {
              await mkdir(copyPath, { recursive: true });
              await traverseDir(pathName);
            }
          }
        }
      } catch (e) {
        throw e;
      }
    };

    void traverseDir(sourceDir)
      .then(() => callback(null))
      .catch(e => callback(e));
  })();
};

export default folderCopying;

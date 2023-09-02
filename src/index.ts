import { createReadStream, createWriteStream } from 'node:fs';
import { readdir } from 'node:fs/promises';
import { extname } from 'node:path';

const isTxt = (pathFile: string): boolean => extname(pathFile) === '.txt';

const mergingFiles = async (directoryPath: string, outputFileName: string) => {
  try {
    const wStream = createWriteStream(outputFileName);
    const files = await readdir(directoryPath);

    const arrayOfTextFiles = files.filter(file => isTxt(file));

    for (const file of arrayOfTextFiles) {
      const rStream = createReadStream(`${directoryPath}/${file}`);

      rStream.on('data', chunk => {
        wStream.write(`[${file}]\n`, 'utf8');
        wStream.write(chunk, 'utf8');
      });
    }
  } catch (e) {
    console.log('ERROR', e);
  }
};

await mergingFiles('./test', './write.txt');

import { mkdir, readdir } from 'node:fs/promises';
import isImage from './isImage.js';
import sharp from 'sharp';

const mergingFiles = async (directoryPath: string, outputDir: string) => {
  try {
    const files = await readdir(directoryPath);
    await mkdir(outputDir, { recursive: true });

    const arrayOfImageFiles = files.filter(img => isImage(img));

    for (const file of arrayOfImageFiles) {
      await sharp(`${directoryPath}/${file}`)
        .resize(300)
        .grayscale(true)
        .blur()
        .toFile(`${outputDir}/${file}`);
    }
  } catch (e) {
    console.log('ERROR', e);
  }
};

await mergingFiles('./test', './image');

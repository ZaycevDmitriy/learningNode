import { extname } from 'node:path';

const extensions = new Set([
  'jpeg',
  'jpg',
  'png',
  'webp',
  'gif',
  'avif',
  'tiff',
  'svg',
]);

const isImage = (path: string): boolean =>
  extensions.has(extname(path).slice(1).toLowerCase());
export default isImage;

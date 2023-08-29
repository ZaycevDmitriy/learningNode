import folderCopying from './folderCopying.js';

folderCopying('./folder', './copyFolder', i => {
  console.log(i);
});

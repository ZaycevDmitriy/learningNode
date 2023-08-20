const getUserData = require('mypackage');

const data = {
  name: 'дмитрий зайцев',
  dateBirth: '26.09.1985',
  purpose: 'карьерный рост Common JS',
};

console.log(getUserData(data));

setTimeout(() => {
  console.log('Был диван,');
}, 100);

setImmediate(() => {
  console.log('Выйди вон!');
});

process.nextTick(() => {
  console.log('На диване');
});

process.nextTick(() => {
  console.log('Чемодан,');
});

setImmediate(() => {
  console.log('Кто не верит –');
});

setTimeout(() => {
  console.log('Ехал слон.');
}, 10);

setImmediate(() => {
  console.log('В чемодане');
});

console.log('Плыл по морю');

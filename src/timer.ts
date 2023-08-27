import MyEventEmitter from './MyEventEmitter.js';

const myEE = new MyEventEmitter();

myEE.on('tick', (index: number) => {
  console.log(`Tick - ${index}`);
});

const timer = (sec: number) => {
  let count = 0;
  // eslint-disable-next-line prefer-const
  let timerId: NodeJS.Timeout | undefined;

  const emitTimeout = () => {
    count++;
    if (count <= sec) {
      clearTimeout(timerId);
      myEE.emit('tick', count);
      setTimeout(emitTimeout, 1000);
    }
  };
  emitTimeout();
  timerId = setTimeout(emitTimeout, 1000);
};

timer(10);

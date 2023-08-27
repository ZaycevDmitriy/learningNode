import MyEventEmitter from './MyEventEmitter.js';

const myEE = new MyEventEmitter();

const sendMessage = (username: string, message: string) => {
  myEE.emit('message', username, message);
};

const receiveMessage = () => {
  myEE.on('message', (username, message) => {
    console.log(`${username}: ${message}`);
  });
};

receiveMessage();

sendMessage('Дима', 'Привет!');
sendMessage('Коля', 'Привет!');
sendMessage('Дима', 'Го кодить');
sendMessage('Коля', 'НЕ! Ушел гулять с Машкой');

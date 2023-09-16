#!/usr/bin/env node

import argsParse from './util/argsParse.js';
import generatePassword, { IOption } from './service/generatePassword.js';

const app = () => {
  const arg = argsParse(process.argv);
  const option: IOption = {
    uppercase: false,
    special: false,
    number: false,
    ask: false,
    length: 8,
  };

  if (arg.a || arg.ask) {
    generatePassword(option);
    return;
  }

  if (arg.h || arg.help) {
    console.log(`
    -h --help       | список команд
    -l --length     | длина пароля
    -u --uppercase  | заглавные буквы
    -n --number     | включить числа
    -s --special    | включить спецсимволы
    -a --ask        | провести опрос
    `);
    return;
  }

  if (arg.uppercase || arg.u) {
    console.log('Прописные буквы');
    option.uppercase = true;
  }
  if (arg.special || arg.s) {
    console.log('Спец символы');
    option.special = true;
  }
  if (arg.number || arg.n) {
    console.log('Цифры');
    option.number = true;
  }
  if (arg.length || arg.l) {
    console.log(`Длина пароля: ${arg.length || arg.l}`);
    if (typeof arg.length !== 'boolean' || typeof arg.l !== 'boolean') {
      option.length = Number(arg.length || arg.l);
    }
  }
  generatePassword(option);
};

app();

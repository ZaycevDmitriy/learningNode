import shuffle from '../util/shuffle.js';

export interface IOption {
  uppercase?: boolean;
  number?: boolean;
  special?: boolean;
  ask?: boolean;
  length?: number;
}
const generatePassword = (option: IOption) => {
  let charset = 'abcdefghijklmnopqrstuvwxyz';

  if (option.uppercase) {
    charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }

  if (option.number) {
    charset += '1234567890';
  }

  if (option.special) {
    charset += '!@£$%^&*()-+';
  }

  const passwordArray = shuffle(charset.split(''));

  if (option.length) {
    passwordArray.length = option.length;
  }

  console.log(`ПАРОЛЬ: ${passwordArray.join('')}`);
};

export default generatePassword;

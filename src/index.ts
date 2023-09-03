import { readFile } from 'node:fs/promises';
import readline from 'node:readline/promises';
import process from 'node:process';

type IQuestion = {
  question: string;
  options: string[];
  correctIndex: number;
};

const printError = (numberOfOptions: number) => {
  console.log('');
  console.log(`Введите цифру от 1 до ${numberOfOptions}`);
  console.log('');
};

const printQuestions = (
  answerOptions: string[],
  indexQuestion: number,
  question: string,
) => {
  console.log(`Вопрос ${indexQuestion + 1}: ${question}`);

  answerOptions.forEach((value, index) => {
    console.log(`${index + 1}. ${value}`);
  });
};

const quiz = async () => {
  const jsonString = await readFile('./src/question.json');

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const questions: IQuestion[] = JSON.parse(jsonString.toString());

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let indexQuestion = 0;
  let currentAnswer = 0;

  console.log('Приветствуем на нашем тесте по JavaScrip и Node.js');
  console.log('Вариант правильного ответа выбираем цифрами');
  console.log('');

  const askAQuestion = async () => {
    if (questions.length <= indexQuestion) return;

    const questionQuiz = questions[indexQuestion];
    const { options, question, correctIndex } = questionQuiz;

    printQuestions(options, indexQuestion, question);

    const answer = await rl.question('Ваш ответ: ');
    const number = parseInt(answer);
    const numberOfOptions = options.length;

    if (isNaN(number)) {
      printError(numberOfOptions);
      await askAQuestion();
      return;
    }
    if (number > options.length) {
      printError(numberOfOptions);
      await askAQuestion();
      return;
    }

    if (number - 1 === correctIndex) {
      indexQuestion++;
      currentAnswer++;
      console.log('Правильный ответ!');
    } else {
      indexQuestion++;
      console.log('Неправильный ответ.');
    }
    console.log('');
    await askAQuestion();
  };

  await askAQuestion();

  console.log('Наш Квиз закончился');
  console.log(`Общее количество правильных ответов: ${currentAnswer}`);

  rl.close();
};

await quiz();

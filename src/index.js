import readlineSync from 'readline-sync';

const gameLogic = (name) => {
  let points = 0;
  while (points < 3) {
    const number = Math.round(Math.random() * 100);
    console.log(`Question: ${number}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = (number % 2 === 0) ? 'yes' : 'no';
    if (userAnswer !== correctAnswer) {
      return `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`;
    }
    console.log('Correct!');
    points += 1;
  }
  return `Congratulations, ${name}!`;
};

export default () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no".\n');
  const userName = readlineSync.question('May I have your name?');
  console.log(`Hello, ${userName}! \n`);
  const stringResult = gameLogic(userName);
  console.log(stringResult);
};

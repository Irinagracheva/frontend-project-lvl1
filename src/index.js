import readlineSync from 'readline-sync';
import evenFunc from './games/even';
import calcFunc from './games/calc';
import gcdFunc from './games/gcd';
import progFunc from './games/prog';
import primeFunc from './games/prime';

const gameLogic = (gameType) => {
  if (gameType === 'even') {
    return evenFunc();
  }
  if (gameType === 'calc') {
    return calcFunc();
  }
  if (gameType === 'gcd') {
    return gcdFunc();
  }
  if (gameType === 'prog') {
    return progFunc();
  }
  if (gameType === 'prime') {
    return primeFunc();
  }
  return () => 0;
};

export default (gameName) => {
  console.log('Welcome to the Brain Games!');
  switch (gameName) {
    case ('even'): {
      console.log('Answer "yes" if number even otherwise answer "no".\n');
      break;
    }
    case ('calc'):
      console.log('What is the result of the expression?\n');
      break;
    case ('gcd'):
      console.log('Find the greatest common divisor of given numbers.\n');
      break;
    case ('prog'):
      console.log('What number is missing in the progression?\n');
      break;
    case ('prime'):
      console.log('Answer "yes" if given number is prime. Otherwise answer "no".\n');
      break;
    default:
      console.log('There is a mistake in program!');
  }
  const userName = readlineSync.question('May I have your name?');
  console.log(`Hello, ${userName}! \n`);
  let points = 0;
  while (points < 3) {
    const [statement, correctAnswer] = gameLogic(gameName);
    console.log(`Question: ${statement}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (String(userAnswer) !== correctAnswer) {
      return `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`;
    }
    console.log('Correct!');
    points += 1;
  }
  return `Congratulations, ${userName}!`;
};

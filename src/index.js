import readlineSync from 'readline-sync';

const findGcd = (number1, number2) => {
  const num1 = Math.abs(number1);
  const num2 = Math.abs(number2);
  if (num1 === num2) {
    return num1;
  }
  return (num1 > num2) ? findGcd(num1 - num2, num2) : findGcd(num1, num2 - num1);
};

const gameLogic = (gameType) => {
  const number1 = Math.round(Math.random() * 100);
  let gameAnswer = 0;
  let question = number1;
  if (gameType === 'even') {
    gameAnswer = (number1 % 2 === 0) ? 'yes' : 'no';
  }
  const strOperator = '+-*';
  if (gameType === 'calc') {
    const number2 = Math.round(Math.random() * 100);
    const operator = strOperator[Math.round(Math.random() * 2)];
    question = `${number1} ${operator} ${number2}`;
    switch (operator) {
      case ('+'):
        gameAnswer = String(number1 + number2);
        break;
      case ('-'):
        gameAnswer = String(number1 - number2);
        break;
      case ('*'):
        gameAnswer = String(number1 * number2);
        break;
      default:
        gameAnswer = 'There is a mistake in program!';
    }
  }
  if (gameType === 'gcd') {
    const secondNumber = Math.round(Math.random() * 100);
    question = `${number1} ${secondNumber}`;
    gameAnswer = String(findGcd(number1, secondNumber));
  }
  return [question, gameAnswer];
};

export default (gameName) => {
  console.log('Welcome to the Brain Games!');
  if (gameName === 'even') {
    console.log('Answer "yes" if number even otherwise answer "no".\n');
  }
  if (gameName === 'calc') {
    console.log('What is the result of the expression?\n');
  }
  if (gameName === 'gcd') {
    console.log('Find the greatest common divisor of given numbers.\n');
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

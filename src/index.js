import readlineSync from 'readline-sync';

const findGcd = (number1, number2) => {
  const num1 = Math.abs(number1);
  const num2 = Math.abs(number2);
  if (num1 === num2) {
    return num1;
  }
  return (num1 > num2) ? findGcd(num1 - num2, num2) : findGcd(num1, num2 - num1);
};

const isPrime = (num) => {
  if (num < 3) {
    return true;
  }
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const gameLogic = (gameType) => {
  const number1 = Math.round(Math.random() * 100);
  let gameAnswer = '';
  let question = '';
  if (gameType === 'even') {
    question = number1;
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
  if (gameType === 'prog') {
    const diff = 1 + Math.round(Math.random() * 9);
    const hiddenNumberIndex = Math.round(Math.random() * 9);
    let nextNumber = number1;
    for (let i = 0; i < 11; i += 1) {
      question = (i !== hiddenNumberIndex) ? `${question} ${nextNumber}` : `${question} .. `;
      if (i === hiddenNumberIndex) {
        gameAnswer = String(nextNumber);
      }
      nextNumber += diff;
    }
  }
  if (gameType === 'prime') {
    question = number1;
    gameAnswer = isPrime(number1) ? 'yes' : 'no';
  }
  return [question, gameAnswer];
};

export default (gameName) => {
  console.log('Welcome to the Brain Games!');
  switch (gameName) {
    case ('even'):
      console.log('Answer "yes" if number even otherwise answer "no".\n');
      break;
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

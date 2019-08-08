import { userGreeting, game } from '..';

const calcRule = 'What is the result of the expression?\n';

const calcFunc = () => {
  const strOperator = '+-*';
  const number1 = Math.round(Math.random() * 100);
  const number2 = Math.round(Math.random() * 100);
  const operator = strOperator[Math.round(Math.random() * 2)];
  const question = `${number1} ${operator} ${number2}`;
  let gameAnswer = '';
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
  return [question, gameAnswer];
};

export default () => {
  const userName = userGreeting(calcRule);
  const result = game(calcFunc, userName);
  console.log(result);
};

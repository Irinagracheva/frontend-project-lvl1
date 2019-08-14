import game from '..';
import random from '../utils';

const calcRule = 'What is the result of the expression?';
const strOperator = '+-*';

const calcFunc = () => {
  const number1 = random(0, 100);
  const number2 = random(0, 100);
  const operator = strOperator[random(0, strOperator.length - 1)];
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
  game(calcRule, calcFunc);
};

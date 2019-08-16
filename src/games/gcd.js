import game from '..';
import random from '../utils';

const gcdRule = 'Find the greatest common divisor of given numbers.';

const findGcd = (number1, number2) => {
  const num1 = Math.max(number1, number2);
  const num2 = Math.min(number1, number2);
  return (num1 === num2) ? num1 : findGcd(num1 - num2, num2);
};

const gcdData = () => {
  const firstNumber = random(0, 100);
  const secondNumber = random(0, 100);
  const question = `${firstNumber} ${secondNumber}`;
  const gameAnswer = String(findGcd(firstNumber, secondNumber));
  return [question, gameAnswer];
};

export default () => {
  game(gcdRule, gcdData);
};

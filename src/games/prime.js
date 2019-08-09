import game from '..';
import random from '../utils';

const primeRule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  if (num === 2) {
    return true;
  }
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const primeFunc = () => {
  const question = random(0, 100);
  const gameAnswer = isPrime(question) ? 'yes' : 'no';
  return [question, gameAnswer];
};

export default () => {
  game(primeRule, primeFunc);
};

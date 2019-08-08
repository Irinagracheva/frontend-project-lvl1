import { userGreeting, game } from '..';

const primeRule = 'Answer "yes" if given number is prime. Otherwise answer "no".\n';

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

const primeFunc = () => {
  const number1 = Math.round(Math.random() * 100);
  const gameAnswer = isPrime(number1) ? 'yes' : 'no';
  return [number1, gameAnswer];
};

export default () => {
  const userName = userGreeting(primeRule);
  const result = game(primeFunc, userName);
  console.log(result);
};

import { userGreeting, game } from '..';

const evenRule = 'Answer "yes" if number even otherwise answer "no".\n';

const evenFunc = () => {
  const number1 = Math.round(Math.random() * 100);
  const gameAnswer = (number1 % 2 === 0) ? 'yes' : 'no';
  return [number1, gameAnswer];
};

export default () => {
  const userName = userGreeting(evenRule);
  const result = game(evenFunc, userName);
  console.log(result);
};

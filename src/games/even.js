import game from '..';
import random from '../utils';

const evenRule = 'Answer "yes" if number even otherwise answer "no".';

const isEven = num => num % 2 === 0;

const evenData = () => {
  const question = random(0, 100);
  const gameAnswer = isEven(question) ? 'yes' : 'no';
  return [question, gameAnswer];
};

export default () => {
  game(evenRule, evenData);
};

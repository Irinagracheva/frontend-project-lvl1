import game from '..';
import random from '../utils';

const progressionRule = 'What number is missing in the progression?';
const progressionLength = 10;

const progressionFunc = () => {
  const firstNumber = random(0, 10);
  const diff = random(1, 10);
  const hiddenNumberIndex = random(0, progressionLength - 1);
  let question = '';
  let gameAnswer = '';
  let nextNumber = 0;
  for (let i = 0; i < progressionLength; i += 1) {
    nextNumber = firstNumber + diff * i;
    if (i === hiddenNumberIndex) {
      gameAnswer = String(nextNumber);
      question = `${question} .. `;
    } else {
      question = `${question} ${nextNumber}`;
    }
  }
  return [question, gameAnswer];
};

export default () => {
  game(progressionRule, progressionFunc);
};

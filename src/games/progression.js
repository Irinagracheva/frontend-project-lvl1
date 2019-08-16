import game from '..';
import random from '../utils';

const progressionRule = 'What number is missing in the progression?';
const progressionLength = 10;

const progressionData = () => {
  const firstNumber = random(0, 10);
  const diff = random(1, 10);
  const hiddenNumberIndex = random(0, progressionLength - 1);
  const gameAnswer = String(firstNumber + diff * hiddenNumberIndex);
  let question = '';
  for (let i = 0; i < progressionLength; i += 1) {
    const nextNumber = firstNumber + diff * i;
    question = (i !== hiddenNumberIndex) ? `${question} ${nextNumber}` : `${question} .. `;
  }
  return [question.trim(), gameAnswer];
};

export default () => {
  game(progressionRule, progressionData);
};

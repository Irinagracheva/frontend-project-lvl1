export default () => {
  const number1 = Math.round(Math.random() * 9);
  const diff = 1 + Math.round(Math.random() * 9);
  const hiddenNumberIndex = Math.round(Math.random() * 9);
  let question = '';
  let gameAnswer = '';
  let nextNumber = number1;
  for (let i = 0; i < 11; i += 1) {
    question = (i !== hiddenNumberIndex) ? `${question} ${nextNumber}` : `${question} .. `;
    if (i === hiddenNumberIndex) {
      gameAnswer = String(nextNumber);
    }
    nextNumber += diff;
  }
  return [question, gameAnswer];
};

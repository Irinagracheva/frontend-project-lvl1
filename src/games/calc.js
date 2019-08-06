export default () => {
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

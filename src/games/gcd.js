const findGcd = (number1, number2) => {
  const num1 = Math.abs(number1);
  const num2 = Math.abs(number2);
  if (num1 === num2) {
    return num1;
  }
  return (num1 > num2) ? findGcd(num1 - num2, num2) : findGcd(num1, num2 - num1);
};

export default () => {
  const firstNumber = Math.round(Math.random() * 100);
  const secondNumber = Math.round(Math.random() * 100);
  const question = `${firstNumber} ${secondNumber}`;
  const gameAnswer = String(findGcd(firstNumber, secondNumber));
  return [question, gameAnswer];
};

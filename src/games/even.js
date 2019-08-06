export default () => {
  const number1 = Math.round(Math.random() * 100);
  const gameAnswer = (number1 % 2 === 0) ? 'yes' : 'no';
  return [number1, gameAnswer];
};

import readlineSync from 'readline-sync';

export const userGreeting = (gameRule) => {
  console.log('Welcome to the Brain Games!');
  console.log(gameRule);
  const userName = readlineSync.question('May I have your name?');
  console.log(`Hello, ${userName}! \n`);
  return userName;
};

export const game = (gameLogic, userName) => {
  let points = 0;
  while (points < 3) {
    const [statement, correctAnswer] = gameLogic();
    console.log(`Question: ${statement}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (String(userAnswer) !== correctAnswer) {
      return `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`;
    }
    console.log('Correct!');
    points += 1;
  }
  return `Congratulations, ${userName}!`;
};

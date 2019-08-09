import readlineSync from 'readline-sync';

export default (gameRule, gameLogic) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${gameRule}\n`);
  const userName = readlineSync.question('May I have your name?');
  console.log(`Hello, ${userName}! \n`);
  const pointsToWin = 3;
  for (let points = 0; points < pointsToWin; points += 1) {
    const [statement, correctAnswer] = gameLogic();
    console.log(`Question: ${statement}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (String(userAnswer) !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

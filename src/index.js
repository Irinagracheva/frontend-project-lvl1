import readlineSync from 'readline-sync';

const pointsToWin = 3;

export default (gameRule, gameData) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${gameRule}\n`);
  const userName = readlineSync.question('May I have your name?');
  console.log(`Hello, ${userName}! \n`);
  for (let points = 0; points < pointsToWin; points += 1) {
    const [question, correctAnswer] = gameData();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (String(userAnswer) !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

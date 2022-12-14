import readlineSync from 'readline-sync';

const UserHello = () => {
  const name = readlineSync.question('May I have your name? ');
  const Hello = `Hello, ${name}!`;
  return Hello;
};

const UserAnswers = () => {
  const answer = readlineSync.question('');
  return answer;
};

const BotAnswer = () => {
  const answers = ['stone', 'scissors', 'paper'];
  const getRandomElement = (min, ma, arr) => arr[Math.floor(Math.random() * (ma - min + 1)) + min];
  return getRandomElement(0, answers.length - 1, answers);
};
const startGame = () => {
  console.log('Welcome to the stone,scissors,paper game!');
  console.log(UserHello());
  console.log('The game ends when one of the players reaches 2 wins.');
  console.log('Lets start the game');
};

export {
  startGame, UserAnswers, BotAnswer,
};

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
  const getRandomElement = (min, max, arr) => arr[Math.floor(Math.random() * (max - min + 1)) + min];
  return getRandomElement(0, answers.length - 1, answers);
};

export { UserHello, UserAnswers, BotAnswer };

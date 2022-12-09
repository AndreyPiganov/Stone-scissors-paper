import readlineSync from 'readline-sync';
import GameData from './index.js';

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
const startGame = () => {
  console.log('Welcome to the stone,scissors,paper game!');
  console.log(UserHello());
  console.log('If you want to quit the game then write: exit or end.');
  console.log('The game ends when one of the players reaches 2 wins.');
  console.log('Lets start the game');
};
const LogicGame = (count) => {
  console.log('To begin, write: stone, scissors, or paper.');
  const text = UserAnswers();
  const text1 = BotAnswer();
  console.log(`Your answer:${text}`);
  console.log(`Bot answer:${text1}`);
if (text === text1) {
  console.log(`Draw!\nYour score: ${count}`);
} else if (text === 'stone' && text1 === 'scissors') {
  count += 1;
  console.log(`Victory!\nYour score: ${count}`);
} else if (text === 'paper' && text1 === 'stone') {
  count += 1;
  console.log(`Victory!\nYour score: ${count}`);
} else if (text === 'scissors' && text1 === 'paper') {
  count += 1;
  console.log(`Victory!\nYour score: ${count}`);
} else if (text === 'exit') {
  count += 3;
} else if (text === 'end') {
  count += 3;
} else {
  count += -1;
  console.log(`You lose!\nYour score: ${count}`);
}
return GameData(count);
}
export {
  startGame, LogicGame,
};

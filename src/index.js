import { startGame, UserAnswers, BotAnswer } from './helpers.js';

startGame();

const GameData = (count) => {
  if (count === 2) {
    console.log('You winner!!!\nGame over!');
  } else if (count === -2) {
    console.log('You loser!!!\nGame over!');
  } else if (count === 3) {
    console.log('Good bye!');
  } else {
    return LogicGame(count);
  }
  return false;
};
const LogicGame = (counter) => {
  let count = counter;
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
  } else {
    count += -1;
    console.log(`You lose!\nYour score: ${count}`);
  }
  return GameData(count);
};
export default GameData;

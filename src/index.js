import { UserAnswers, BotAnswer, startGame } from './helpers.js';

startGame();
const GameData = () => {
  let count = 0;
  while (count <= 1 && count >= -1) {
    console.log('To begin, write: stone, scissors, or paper.');
    const text = `Your answer: ${UserAnswers()}`;
    const text1 = `Bot answer: ${BotAnswer()}`;
    const array = text.split(':');
    const array1 = text1.split(':');
    console.log(text);
    console.log(text1);
    if (array[array.length - 1] === array1[array.length - 1]) {
      console.log(`Draw!\nYour score: ${count}`);
    } else if (array[array.length - 1] === ' stone' && array1[array.length - 1] === ' scissors') {
      count += 1;
      console.log(`Victory!\nYour score: ${count}`);
    } else if (array[array.length - 1] === ' stone' && array1[array.length - 1] === ' paper') {
      count += -1;
      console.log(`You lose!\nYour score: ${count}`);
    } else if (array[array.length - 1] === ' paper' && array1[array.length - 1] === ' scissors') {
      count += -1;
      console.log(`You lose!\nYour score: ${count}`);
    } else if (array[array.length - 1] === ' paper' && array1[array.length - 1] === ' stone') {
      count += 1;
      console.log(`Victory!\nYour score: ${count}`);
    } else if (array[array.length - 1] === ' scissors' && array1[array.length - 1] === ' stone') {
      count += -1;
      console.log(`You lose!\nYour score: ${count}`);
    } else if (array[array.length - 1] === ' scissors' && array1[array.length - 1] === ' paper') {
      count += 1;
      console.log(`Victory!\nYour score: ${count}`);
    } else if (array[array.length - 1] === ' exit') {
      console.log('Good bye!');
      count += 3;
    } else if (array[array.length - 1] === ' end') {
      console.log('Good bye!');
      count += 3;
    } else {
      console.log('Something went wrong :(');
      count += 3;
    }
    if (count === 2) {
      console.log('You winner!!!\nGame over!');
    } else if (count === -2) {
      console.log('You loser!!!\nGame over!');
    }
  }
};
export default GameData;

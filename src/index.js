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
      console.log('Draw!');
      count += 0;
      console.log(`Your score: ${count}`);
    } else if (array[array.length - 1] === ' stone' && array1[array.length - 1] === ' scissors') {
      console.log('Victory!');
      count += 1;
      console.log(`Your score: ${count}`);
    } else if (array[array.length - 1] === ' stone' && array1[array.length - 1] === ' paper') {
      console.log('You lose!');
      count += -1;
      console.log(`Your score: ${count}`);
    } else if (array[array.length - 1] === ' paper' && array1[array.length - 1] === ' scissors') {
      console.log('You lose!');
      count += -1;
      console.log(`Your score: ${count}`);
    } else if (array[array.length - 1] === ' paper' && array1[array.length - 1] === ' stone') {
      console.log('Victory!');
      count += 1;
      console.log(`Your score: ${count}`);
    } else if (array[array.length - 1] === ' scissors' && array1[array.length - 1] === ' stone') {
      console.log('You lose!');
      count += -1;
      console.log(`Your score: ${count}`);
    } else if (array[array.length - 1] === ' scissors' && array1[array.length - 1] === ' paper') {
      console.log('Victory!');
      count += 1;
      console.log(`Your score: ${count}`);
    } else if (array[array.length - 1] === ' exit') {
      console.log('Good bye!');
      count += 11;
    } else if (array[array.length - 1] === ' end') {
      console.log('Good bye!');
      count += 11;
    } else {
      console.log('Something went wrong :(');
      count += 11;
    }
    if ((count === 2) || (count === -2)) {
      console.log('Game over!');
    }
    if (count === 2) {
      console.log('You winner!!!');
    } else if (count === -2) {
      console.log('You loser!!!');
    }
  }
};
export default GameData;

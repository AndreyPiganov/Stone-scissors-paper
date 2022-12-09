import { UserAnswers, BotAnswer, startGame } from './helpers.js';

startGame();
const GameData = (count) => {
  console.log('To begin, write: stone, scissors, or paper.');
    const text = `Your answer: ${UserAnswers()}`;
    const text1 = `Bot answer: ${BotAnswer()}`;
    const array = text.split(':');
    const array1 = text1.split(':');
    console.log(text);
    console.log(text1);
    if(count === 1 ){
      console.log(`Your score: ${count+1}\nYou winner!!!\nGame over!`);
    }
    else if(count === -1){
      console.log(`Your score: ${count-1}\nYou loser!!!\nGame over!`);
    }
    else if(count === 3){
      console.log('Good bye!');
    }
    else{
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
      count += 3;
    } else if (array[array.length - 1] === ' end') {
      count += 3;
    } else {
      console.log('Something went wrong :(\nTry again');
      count += 3;
    }
    return GameData(count)
  }
};
export default GameData;

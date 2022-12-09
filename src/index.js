import { startGame,LogicGame } from './helpers.js';

startGame();

const GameData = (count) => {
    if(count === 2 ){
      console.log('You winner!!!\nGame over!');
    }
    else if(count === -2){
      console.log('You loser!!!\nGame over!');
    }
    else if(count === 3){
      console.log('Good bye!');
    }
    else{
      return LogicGame(count);
  }
};
export default GameData;

#!/usr/bin/env node
import { UserHello,UserAnswers,BotAnswer} from "../src/welcome.js";

console.log('Welcome to the stone,scissors,paper game!');
console.log(UserHello());
console.log('If you want to quit the game then write: exit or end.')
console.log('Lets start the game');
let count = 0;
while ((count <= 1) && (count >= -1)){   
console.log('To begin, write: stone, scissors, or paper.');
let text = 'Your answer: ' + UserAnswers();
let text1 = 'Bot answer: ' + BotAnswer();
let array = text.split(':');
let array1= text1.split(':');
console.log(text);
console.log(text1);
    if(array[array.length-1] === array1[array.length-1]){
        console.log('Draw!');
        count += 0;
        console.log('Your score: ' + count);
    }
    else if(array[array.length-1] === ' stone' && array1[array.length-1] === ' scissors'){
        console.log('Victory!');
        count += 1;
        console.log('Your score: ' + count);
        if((count === 2) || (count === -2)){
            console.log('Game over!');
        }
    }
    else if(array[array.length-1] === ' stone' && array1[array.length-1] === ' paper'){
        console.log('You lose!');
        count += -1;
        console.log('Your score: ' + count);
        if((count === 2) || (count === -2)){
            console.log('Game over!');
        }
    }
    else if(array[array.length-1] === ' paper' && array1[array.length-1] === ' scissors'){
        console.log('You lose!');
        count += -1;
        console.log('Your score: '+ count);
        if((count === 2) || (count === -2)){
            console.log('Game over!');
        }
    }
    else if(array[array.length-1] === ' paper' && array1[array.length-1] === ' stone'){
        console.log('Victory!');
        count += 1;
        console.log('Your score: ' + count);
        if((count === 2) || (count === -2)){
            console.log('Game over!');
        }
    }
    else if(array[array.length-1] === ' scissors' && array1[array.length-1] === ' stone'){
        console.log('You lose!');
        count += -1;
        console.log('Your score: ' + count);
        if((count === 2) || (count === -2)){
            console.log('Game over!');
        }
    }
    else if (array[array.length-1] === ' scissors' && array1[array.length-1] === ' paper'){
        console.log('Victory!');
        count += 1;
        console.log('Your score: ' + count);
        if((count === 2) || (count === -2)){
            console.log('Game over!');
        }
    }
    else{
        console.log('Something went wrong :(');
        count += 11;
    }
}




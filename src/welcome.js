import readlineSync from 'readline-sync';

const UserHello = () =>{
    let name = readlineSync.question('May I have your name? ');
    let Hello = 'Hello, ' + name + '!';
    return Hello
}

const userAnswers = () =>{
    let answer = readlineSync.question('');
    return answer;
}

const BotAnswer= () =>{
    const answers=['stone', 'scissors', 'paper'];
    const getRandomElement=(min,max,arr)=>arr[Math.floor(Math.random()*(max-min+1))+min]
    return getRandomElement(0,answers.length-1,answers);
}

const UserScore = () =>{
    let count = 0;
    if (BotAnswer()){
        count +=1
        console.log(count);
    }
    return count;
}

export {UserHello,userAnswers,BotAnswer,UserScore};
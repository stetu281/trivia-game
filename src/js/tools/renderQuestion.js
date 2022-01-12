import * as Tools from './tools.js';

export const renderQuestion = (results) => {

    document.querySelector('.gamepage__question').innerHTML = results[0].question;

    if(results[0].type === 'multiple') {
        const arr = results[0].incorrect_answers;
        let num = Tools.randomNum(arr.length);
        
        arr.splice(num, 0, results[0].correct_answer);

        for(let answer of arr) {
            let btn = document.createElement('button');
            btn.innerHTML = answer;
            btn.classList.add('gamepage__answer');
            document.querySelector('.gamepage__choice').appendChild(btn);
        }
    };
};
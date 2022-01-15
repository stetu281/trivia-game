import * as Tools from './tools.js';

export const renderQuestion = (results) => {

    const container = document.querySelector('.gamepage__choice');

    document.querySelector('.gamepage__question').innerHTML = results[0].question;
    container.innerHTML = '';

    if(results[0].type === 'multiple') {
        let arr = results[0].incorrect_answers;
        let num = Tools.randomNum(arr.length);
        
        arr.splice(num, 0, results[0].correct_answer);

        arr = Tools.shuffleArr(arr);

        for(let answer of arr) {
            let btn = document.createElement('button');
            btn.innerHTML = answer;
            btn.classList.add('gamepage__answer');
            container.appendChild(btn);
        }
    };
};
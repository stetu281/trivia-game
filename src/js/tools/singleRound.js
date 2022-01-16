import * as Tools from './tools.js';
import { renderQuestion } from './renderQuestion.js';


export const singleRound = async (callback) => {

    /*----------------------------------------------------
    const { response_code, results } = await Tools.getQuestion(token);
    -----------------------------------------------------*/

    /*---------temp---------*/
    const response_code = 0;
    const results = [
        {
            "category": "Entertainment: Video Games",
            "type": "multiple",
            "difficulty": "easy",
            "question": "Who was the voice actor for Snake in Metal Gear Solid V: The Phantom Pain?",
            "correct_answer": "Kiefer Sutherland",
            "incorrect_answers": [
                "David Hayter",
                "Norman Reedus",
                "Hideo Kojima"
            ]
        }
    ];

    /*--------end temp-------*/
    if(response_code !== 0) {
        document.querySelector('.gamepage__error').innerHTML = 'Sorry, something went wrong';
        return;
    }

    let playerAnswer;
    const progressBar = document.querySelector('.timer__progress-bar');
    let i = -1;
    const maxTime = 21;

    let interval = setInterval(() => {
        if(i > 0 && i < maxTime) {
            progressBar.style.width = `${i * 5}%`;
        } else if(i === maxTime) {
            clearInterval(interval);
            playerAnswer = false;
            callback(playerAnswer);
        }    
        i++;
    }, 1000);
    
    renderQuestion(results);

    document.querySelector('.gamepage__choice').addEventListener('click', Tools.delegate('button', (e) => {
        if(e.target.innerHTML === results[0].correct_answer) {
            e.target.style.borderColor = 'green';
            playerAnswer = true;               
        } else {
            e.target.style.borderColor = 'red';
            playerAnswer = false;   
        }
        clearInterval(interval);
        progressBar.style.width = '0%';
        document.querySelectorAll('.gamepage__answer').forEach(btn => btn.disabled = true);
        document.querySelector('.timer').classList.add('timer--hide'); 
        callback(playerAnswer);   
    }));
};
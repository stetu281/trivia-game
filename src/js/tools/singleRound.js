import * as Tools from './tools.js';
import { renderQuestion } from './renderQuestion.js';
import { progressbar } from '../components/progressbar.js';

export const singleRound = async (timeout, callback) => {

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

    let result;
    
    renderQuestion(results);
    setTimeout(progressbar, timeout);

    document.querySelector('.gamepage__choice').addEventListener('click', Tools.delegate('button', (e) => {
        if(e.target.innerHTML === results[0].correct_answer) {
            e.target.style.borderColor = 'green';
            result = true;               
        } else {
            e.target.style.borderColor = 'red';
            result = false;   
        }
        document.querySelectorAll('.gamepage__answer').forEach(btn => btn.disabled = true);
        document.querySelector('.timer').classList.add('timer--hide'); 
        callback(result);   
    }));
}
import * as Tools from './tools.js';
import { renderQuestion } from './renderQuestion.js';
import { getReadypage } from '../pages/getReadypage.js';
import { gamepage } from '../pages/gamepage.js';

export const singleRound = async (score) => {

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

    const selection = document.querySelectorAll('.gamepage__choice');
    const nextBtn = document.querySelector('.gamepage__btn');
    let i = -1;
    const maxTime = 21;

    renderQuestion(results);
    document.querySelector('.gamepage__score').innerHTML = `Your score: ${score}`;



    const promise = new Promise((resolve, reject) => {

        let interval = setInterval(() => {
            if(i > 0 && i < maxTime) {
                document.querySelector('.timer__progress-bar').style.width = `${i * 5}%`;
            } else if(i === maxTime) {
                Tools.resetGame(interval);
                resolve(0);
            }    
            i++;
        }, 1000);

        selection.forEach(item => {
            item.addEventListener('click', Tools.delegate('button', (e) => {
                Tools.resetGame(interval);

                if(e.target.innerHTML === results[0].correct_answer) {
                    e.target.style.borderColor = 'green';
                    score++;
                    nextBtn.classList.remove('gamepage__btn--hide');
                    resolve(1);
                } else {
                    e.target.style.borderColor = 'red';
                    resolve(0);
                }
            }),{once: true});
        })
    })
    return promise;
};
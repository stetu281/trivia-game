import * as Tools from './tools.js';
import { renderQuestion } from './renderQuestion.js';
import { getReadypage } from '../pages/getReadypage.js';
import { gameOver } from '../components/gameOver.js';


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

    let i = -1;
    const maxTime = 21;
    const nextBtn = document.querySelector('.gamepage__btn');
    
    renderQuestion(results);
    document.querySelector('.gamepage__score').innerHTML = `Your score: ${score}`;

    const promise = new Promise((resolve, reject) => {

        let interval = setInterval(() => {
            if(i > 0 && i < maxTime) {
                document.querySelector('.timer__progress-bar').style.width = `${i * 5}%`;
            } else if(i === maxTime) {
                Tools.resetGame(interval);
                gameOver(score);
            }    
            i++;
        }, 1000);

        document.querySelector('.gamepage__choice').addEventListener('click', Tools.delegate('button', (e) => {
            if(e.target.innerHTML === results[0].correct_answer) {
                e.target.style.borderColor = 'green';
                Tools.resetGame(interval);
                nextBtn.classList.remove('gamepage__btn--hide');
                nextBtn.addEventListener('click', () => {
                    score++;
                    document.querySelector('.timer').classList.remove('timer--hide');
                    document.querySelector('.gamepage').classList.remove('gamepage--open');
                    getReadypage();
                    nextBtn.classList.add('gamepage__btn--hide');
                    resolve(score);
                });        
            } else {
                e.target.style.borderColor = 'red';
                Tools.resetGame(interval);
                gameOver(score);  
            } 
        }));        
    });

    return promise;
};
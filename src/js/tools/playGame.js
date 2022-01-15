import * as Tools from './tools.js';
import { renderQuestion } from './renderQuestion.js';
import { progressbar } from '../components/progressbar.js';

export const playGame = async () => {

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
    const nextBtn = document.querySelector('.gamepage__btn');

    if(response_code !== 0) {
        document.querySelector('.gamepage__error').innerHTML = 'Sorry, something went wrong';
        return;
    }

    renderQuestion(results);
    setTimeout(progressbar, 4000);

    document.querySelector('.gamepage__choice').addEventListener('click', Tools.delegate('button', (e) => {
        if(e.target.innerHTML === results[0].correct_answer) {
            e.target.style.borderColor = 'green';                
        } else {
            e.target.style.borderColor = 'red';
            nextBtn.innerHTML = 'New Game';      
        }

        document.querySelector('.timer').classList.add('timer--hide');
        document.querySelectorAll('.gamepage__answer').forEach(btn => btn.disabled = true);
        nextBtn.classList.remove('gamepage__btn--hide');
        //make function build resultbox based on wrong or right
        document.querySelector('.resultbox').classList.add('resultbox--reveal');
    }));

    nextBtn.addEventListener('click', (e) => {
        console.log(e.target.innerHTML);
    });



};
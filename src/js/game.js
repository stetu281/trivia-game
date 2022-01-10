import * as Tools from './tools.js';
import { timer } from './components/timer.js';

export const game = async () => {
/*     const { token } = await Tools.getToken();
    const { response_code, results } = await Tools.getQuestion(token); */
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
    
    if(response_code !== 0) {
        console.log('error');/*display error on page*/
    }
    console.log(results);

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
    }

    document.querySelector('.gamepage__question').innerHTML = results[0].question;

    setTimeout(timer, 5000);

};
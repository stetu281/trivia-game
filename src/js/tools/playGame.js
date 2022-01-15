import { singleRound } from './singleRound.js';

export const playGame = async () => {

    const nextBtn = document.querySelector('.gamepage__btn');

    const round = singleRound(5000, result);


    function result(bool) {
        if(!bool) {
            document.querySelector('.resultbox').classList.add('resultbox--reveal');
            return;
        }

        nextBtn.classList.remove('gamepage__btn--hide');
        nextBtn.addEventListener('click', () => {
            console.log('next question');
        });
    };
};
import * as Tools from '../tools/tools.js';
import { singleRound } from '../tools/singleRound.js';


export const gamepage = async () => {
    /*---------------------------------------------------
    const { token } = await Tools.getToken();
    sessionStorage.setItem('gameToken', token);
    --------------------------------------------------*/


    const nextBtn = document.querySelector('.gamepage__btn');

    const round = singleRound(2500, result);


    function result(bool) {
        if(!bool) {
            document.querySelector('.resultbox').classList.add('resultbox--reveal');
            return;
        }

        nextBtn.classList.remove('gamepage__btn--hide');
        nextBtn.addEventListener('click', () => {
            document.querySelector('.timer').classList.remove('timer--hide');
            singleRound(1000, result);
        });
    };
};
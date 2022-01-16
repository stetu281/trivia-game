import { singleRound } from '../tools/singleRound.js';
import { getReadypage } from '../pages/getReadypage.js';


export const gamepage = async () => {
    /*---------------------------------------------------
    const { token } = await Tools.getToken();
    sessionStorage.setItem('gameToken', token);
    --------------------------------------------------*/

    const nextBtn = document.querySelector('.gamepage__btn');
    const round = singleRound(result);

    function result(bool) {
        if(!bool) {
            document.querySelector('.resultbox').classList.add('resultbox--reveal');
        } else {
            nextBtn.classList.remove('gamepage__btn--hide');
            nextBtn.addEventListener('click', () => {
                document.querySelector('.timer').classList.remove('timer--hide');
                document.querySelector('.gamepage').classList.remove('gamepage--open');
                getReadypage();
                singleRound(result);
            });
        }
    };
};
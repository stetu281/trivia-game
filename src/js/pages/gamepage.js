import { singleRound } from '../tools/singleRound.js';
import { gameOver } from '../components/gameOver.js';
import { getReadypage } from './getReadypage.js';

export const gamepage = async () => {
    /*---------------------------------------------------
    const { token } = await Tools.getToken();
    sessionStorage.setItem('gameToken', token);
    --------------------------------------------------*/
    let nextBtn = document.querySelector('.gamepage__btn');
    let score;
    let startscore = 0;

    playRound(startscore);

    async function playRound(score) {
        const result = await singleRound(score);  
        score += result;
 
        if(result === 1) {
            nextBtn.classList.remove('gamepage__btn--hide');
            nextBtn.addEventListener('click', (e) => {
                e.target.classList.add('gamepage__btn--hide');
                getReadypage();
                document.querySelector('.timer').classList.remove('timer--hide');
                document.querySelector('.gamepage').classList.remove('gamepage--open');
                playRound(score);
            },{once: true});           
        } else {
            gameOver(score);
        }
    };
};
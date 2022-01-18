import { singleRound } from '../tools/singleRound.js';

export const gamepage = async () => {
    /*---------------------------------------------------
    const { token } = await Tools.getToken();
    sessionStorage.setItem('gameToken', token);
    --------------------------------------------------*/
    let score = 0;

    playRound(score);

    async function playRound(score) {
        const result = await singleRound(score);
        console.log(result);
        playRound(result);   
    };
};
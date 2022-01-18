export const gameOver = (score) => {
    document.querySelector('.resultbox').classList.add('resultbox--reveal');
    document.querySelector('.resultbox__score').innerHTML = score;
}
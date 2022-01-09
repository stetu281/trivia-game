import css from '../scss/main.scss';

const scoresBtn = document.querySelector('.highscores__btn');
const slideOutElements = document.querySelectorAll('.slide-out');
const highscoreList = document.querySelector('.highscores');



scoresBtn.addEventListener('click', (e) => {
    slideOutElements.forEach(elem => elem.classList.toggle('slide-out--active'));
    highscoreList.classList.toggle('highscores--open');
    e.target.innerHTML === 'Open Scoreboard' ? e.target.innerHTML = 'Close Scoreboard' : e.target.innerHTML = 'Open Scoreboard';    
});


document.querySelector('.startpage__play').addEventListener('click', () => {
    document.querySelector('.ready').classList.add('ready--open');
});
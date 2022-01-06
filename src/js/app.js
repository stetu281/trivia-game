import css from '../scss/main.scss';

const highscores = document.querySelector('.highscores');
const slideOutElements = document.querySelectorAll('.slide-out');
const highscoresBtn = document.querySelector('.highscores__button');

highscoresBtn.addEventListener('click', (e) => {
    slideOutElements.forEach(item => item.classList.toggle('slide-out--active'));
    highscores.classList.toggle('highscores--open');
    e.target.innerHTML === 'Open Scoreboard' ? e.target.innerHTML = 'Close Scoreboard' : e.target.innerHTML = 'Open Scoreboard';
});
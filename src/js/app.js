import css from '../scss/main.scss';

const scoresBtn = document.querySelector('.highscores__btn');
const slideOutElements = document.querySelectorAll('.slide-out');
const highscoreList = document.querySelector('.highscores');
const startpage = document.querySelector('.startpage');
const gamepage = document.querySelector('.gamepage');
const getReadypage = document.querySelector('.ready');



scoresBtn.addEventListener('click', (e) => {
    slideOutElements.forEach(elem => elem.classList.toggle('slide-out--active'));
    highscoreList.classList.toggle('highscores--open');
    e.target.innerHTML === 'Open Scoreboard' ? e.target.innerHTML = 'Close Scoreboard' : e.target.innerHTML = 'Open Scoreboard';    
});


document.querySelector('.startpage__play').addEventListener('click', () => {
    getReadypage.classList.add('ready--open');
    startpage.classList.add('startpage--fade-out');
    setTimeout(() => {
        gamepage.classList.add('gamepage--open')
        getReadypage.classList.remove('ready--open');
    }, 5000);
});
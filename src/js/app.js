import css from '../scss/main.scss';
import { getReadypage } from './pages/getReadypage.js';
import { gamepage } from './pages/gamepage.js';

document.querySelector('.highscores__btn').addEventListener('click', (e) => {
    document.querySelectorAll('.slide-out').forEach(elem => {
        elem.classList.toggle('slide-out--active')
    });
    document.querySelector('.highscores').classList.toggle('highscores--open');
    e.target.innerHTML === 'Open Scoreboard' ?
        e.target.innerHTML = 'Close Scoreboard' : 
        e.target.innerHTML = 'Open Scoreboard';    
});
 
document.querySelector('.startpage__play-btn').addEventListener('click', () => {     
    document.querySelector('.startpage').classList.add('startpage--fade-out');
    getReadypage();
    gamepage();
});  
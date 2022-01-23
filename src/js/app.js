import css from '../scss/main.scss';
import { getReadypage } from './pages/getReadypage.js';
import { gamepage } from './pages/gamepage.js';
import { highscores } from './components/highscores.js';

highscores();
 
document.querySelector('.startpage__play-btn').addEventListener('click', () => {     
    document.querySelector('.startpage').classList.add('startpage--fade-out');
    getReadypage();
    gamepage();
});  
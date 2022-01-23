import { getScores } from '../tools/graphql.js';

export const highscores = async () => {
   const  { players } = await getScores();
   const container = document.querySelector('.highscores__list');

    for( const player of players) {
        let li = document.createElement('li');
        li.classList.add('highscores__list-item');
        li.innerHTML = `
            <span class="highscores__front">
                ${player.name}
            </span>
            <span class="highscores__back">
                ${player.score}
            </span>
        `;
        container.appendChild(li);
    };

    document.querySelector('.highscores__btn').addEventListener('click', (e) => {
        document.querySelectorAll('.slide-out').forEach(elem => {
            elem.classList.toggle('slide-out--active')
        });
        document.querySelector('.highscores').classList.toggle('highscores--open');
        e.target.innerHTML === 'Open Scoreboard' ?
            e.target.innerHTML = 'Close Scoreboard' : 
            e.target.innerHTML = 'Open Scoreboard';    
    });
};
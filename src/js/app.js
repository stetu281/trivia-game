import css from '../scss/main.scss';

const slideOutElements = document.querySelectorAll('.slide-out');

document.querySelector('.highscores__button').addEventListener('click', () => {
    slideOutElements.forEach(item => item.classList.add('slide-out--active'));
});
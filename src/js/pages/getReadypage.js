export const getReadypage = () => {

    const getReadypage = document.querySelector('.ready');

    getReadypage.classList.add('ready--open');

    setTimeout(() => {
        document.querySelector('.gamepage').classList.add('gamepage--open');
        getReadypage.classList.remove('ready--open');
    }, 2500);
    return;
}
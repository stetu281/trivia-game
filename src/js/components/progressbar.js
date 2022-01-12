export const progressbar = () => {

    let interval = setInterval(progress, 1000);
    let i = 1;

    function progress() {
        let timer = 21;

        if(i === timer) {
            clearInterval(interval);
        }
        document.querySelector('.timer__progress-bar').style.width = `${i * 5}%`;
        i++;
    };
};
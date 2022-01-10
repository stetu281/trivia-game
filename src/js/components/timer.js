export const timer = () => {

    const interval = setInterval(progress, 1000);
    let i = 1;

    function progress() {
        let timer = 20;

        if(i === timer) {
            clearInterval(interval);
        }
        document.querySelector('.timer__progress-bar').style.width = `${i * 5}%`;
        i++;
    };
};
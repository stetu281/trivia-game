export const delegate = (target, callback) => {
    return function (e) {
        if (e.target.matches(target)) {
            callback(e);
        }
    };
};

export const getToken = async () => {
    try {
        const response = await fetch('https://opentdb.com/api_token.php?command=request');
        return response.json();
    } catch (error) {
        console.log('Error:', error);
    }
};

export const getQuestion = async (token) => {
    try {
        const response = await fetch(`https://opentdb.com/api.php?amount=1&token=${token}`);
        return response.json();
    } catch (error) {
        console.log('Error:', error);
    }
};

export const randomNum = (max) => {
    return Math.floor(Math.random() * (max + 1));
};

export const shuffleArr = (arr) => {
    for(let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;
};

export const resetGame = (interval) => {
    clearInterval(interval);
    document.querySelector('.timer__progress-bar').style.width = '0%';
    document.querySelectorAll('.gamepage__answer').forEach(btn => btn.disabled = true);
    document.querySelector('.timer').classList.add('timer--hide');
}
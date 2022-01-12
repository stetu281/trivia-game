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
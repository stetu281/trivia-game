import { sendData } from "../tools/graphql.js";

export const gameOver = (result) => {
    document.querySelector('.resultbox').classList.add('resultbox--reveal');
    document.querySelector('.resultbox__score').innerHTML = result;

    document.querySelector('.form__btn').addEventListener('click', async (e) => {
        e.preventDefault();
        let input = document.querySelector('.form__input').value;
        let formData = {
             name: input,
             score: result
            };

            console.log(formData)

        const response = await sendData(formData);
        console.log(response)
        if (response) {
            input = '';
        } else {
            //display error
        }
    })
}
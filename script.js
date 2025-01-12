function rollDice() {

    const num = document.getElementById('num').value;
    const result = document.getElementById('result');
    const image = document.getElementById('image');

    let values = [];
    let images = [];

    for (let i = 1; i <= num; i++) {
        let dice = Math.floor(Math.random() * 6) + 1;
        values.push(dice);
        images.push(`<img src="dice-images/dice${dice}.png" alt="dice${dice}" width="100" height="100">`);
    }

    result.textContent = `dice: ${values.join(', ')}`;
    image.innerHTML = `${images.join(' ')}`;
}
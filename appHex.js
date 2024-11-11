const alphabet = ['a','b','c','d','e','f'];
const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
// I assume i could have saved time by combining alphabet and numbers arrays into one... code and learn.. code and learn...

function generateCode () {
    let code = "";

    for (let i = 0; i < 6; i++) {
        function getRandomLetter() {
            return alphabet[Math.floor(Math.random() * alphabet.length)];
        }
        
        function getRandomNumber() {
            return numbers[Math.floor(Math.random() * numbers.length)];
        }
        
        const randomFunctions = [getRandomLetter(), getRandomNumber()];
        const randomFunc = randomFunctions[Math.floor(Math.random() * randomFunctions.length)];
        code += randomFunc;
    }
    return code;
}

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function() {
    // get random index number from colors array        
    const randomHexNumber = '#' + generateCode();
    document.querySelector('.container').style.backgroundColor = randomHexNumber;
    color.textContent = randomHexNumber;
})

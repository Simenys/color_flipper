const colors = ['green', 'red', 'rgba(133, 122, 200)', '#f15025', 'blue'];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function() {
    // get random index number from colors array        
    const randomNumber = getRandomNumber();
    document.querySelector('.container').style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
})

function getRandomNumber () {
    return Math.floor(Math.random() * colors.length);
}
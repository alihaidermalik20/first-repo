// click a button and the color of the webpage changes and the rgb of that color is displayed

const header = document.querySelector('h1');
const button = document.querySelector('button');

// function to get any random number between two ranges
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
};

const randomColor = () => {
    let r = getRandomIntInclusive(0, 255);
    let g = getRandomIntInclusive(0, 255);
    let b = getRandomIntInclusive(0, 255);
    return `rgb(${r}, ${g}, ${b})`
}

const changeColor = () => {
    // so that you call the function only once
    let color = randomColor();
    // shorthand for query selector
    document.body.style.backgroundColor = color;
    header.innerText = color;
}

button.addEventListener('click', changeColor);

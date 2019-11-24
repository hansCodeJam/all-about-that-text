//querySelector
const biggifyButton = document.querySelector('.biggify');
const nasafyButton = document.querySelector('.nasafy');
const crazifyButton = document.querySelector('.crazify')
const reverseButton = document.querySelector('.reversify');
const titleCaseButton = document.querySelector('.titleify');
const result = document.querySelector('.result');
const userInput = document.querySelector('#user-input');

//functions
const nineThousand = () => result.innerText = biggify(Number(userInput.value));
const nasafied = () => result.innerText = nasafy(Number(userInput.value));
const crazyFied = () => result.innerText = crazify(userInput.value);
const reverseItFied = () => result.innerText = reversify(userInput.value);
const titleFied = () => result.innerText = titleify(userInput.value);

//addEventListener
biggifyButton.addEventListener('click', nineThousand);
nasafyButton.addEventListener('click', nasafied);
crazifyButton.addEventListener('click', crazyFied);
reverseButton.addEventListener('click', reverseItFied);
titleCaseButton.addEventListener('click', titleFied);


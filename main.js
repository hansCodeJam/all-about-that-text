const biggifyButton = document.querySelector('.biggify');
const nasafyButton = document.querySelector('.nasafy');
const crazifyButton = document.querySelector('.crazify')
const reverseButton = document.querySelector('.reversify');
const titleCaseButton = document.querySelector('.titleify');
const result = document.querySelector('.result');
const userInput = document.querySelector('#user-input');

const nineThousand = function (){
    let userInputValue = userInput.value;
    result.innerText = biggify(Number(userInputValue));
}

const nasafied = function(){
    let userInputValue = userInput.value;
    result.innerText = nasafy(Number(userInputValue));
}

const crazyFied = function(){
    let userInputValue = userInput.value;
    result.innerText = crazify(userInputValue);
}

const reverseItFied = function() {
    let userInputValue = userInput.value;
    result.innerText = reversify(userInputValue);
}

const titleFied = function() {
    let userInputValue = userInput.value;
    result.innerText = titleify(userInputValue);
}

biggifyButton.addEventListener('click', nineThousand);
nasafyButton.addEventListener('click', nasafied);
crazifyButton.addEventListener('click', crazyFied);
reverseButton.addEventListener('click', reverseItFied);
titleCaseButton.addEventListener('click', titleFied);


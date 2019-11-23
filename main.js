const biggifyButton = document.querySelector('.biggify');
const nasafyButton = document.querySelector('.nasafy');
const crazifyButton = document.querySelector('.crazify')
const reverseButton = document.querySelector('.reversify');
const titleCaseButton = document.querySelector('.titleify');
// const result = document.querySelector('.result');

const nineThousand = function (){
    let userInputValue = document.querySelector('#user-input').value;
    let number = Number(userInputValue);
    document.querySelector('.result').innerText = biggify(number);
}

const nasafied = function(){
    let userInputValue = document.querySelector('#user-input').value;
    let number = Number(userInputValue);
    document.querySelector('.result').innerText = nasafy(number);
}

const crazyFied = function(){
    let userInputValue = document.querySelector('#user-input').value;
    document.querySelector('.result').innerText = crazify(userInputValue);
}

const reverseItFied = function() {
    let userInputValue = document.querySelector('#user-input').value;
    document.querySelector('.result').innerText = reversify(userInputValue);
}

const titleFied = function() {
    let userInputValue = document.querySelector('#user-input').value;
    document.querySelector('.result').innerText = titleify(userInputValue);
}






biggifyButton.addEventListener('click', nineThousand);
nasafyButton.addEventListener('click', nasafied);
crazifyButton.addEventListener('click', crazyFied);
reverseButton.addEventListener('click', reverseItFied);
titleCaseButton.addEventListener('click', titleFied);


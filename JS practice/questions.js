// If correct answer chosen on a multiple choice question, make the background color green and insert Correct Answer text below
// Otherwise, red bg color and text of incorrect inserted

// for the free response question, take the value inside the input that a user gives and check if it's lower case matches javascript
// if yes then the input field should light up green and text of correct inserted below. Otherwise red input field and text of incorrect

const allMcqs = document.querySelector('#mcqs');

const mcqInputsArray = allMcqs.querySelectorAll('input');

for (let input of mcqInputsArray) {
    input.addEventListener('change', function () {
        message = document.createElement('p');
        if (input === mcqInputsArray[1]) {
            input.parentElement.style.backgroundColor = 'green';
            message.innerText = 'correct answer!';
        }
        else{
            input.parentElement.style.backgroundColor = 'red';
            message.innerText = 'Incorrect';
        }
        input.insertAdjacentElement('afterend', message);
    }, {once: true})
}

const frButton = document.querySelector('button');
const inputTextField = document.querySelector('#fr');
const frAnswer = 'javascript';
const remarkElement = document.createElement('p');

frButton.addEventListener('click', function () {
    const frResponse = inputTextField.value;
    frResponseLower = frResponse.toLowerCase();
    if(frResponseLower === frAnswer) {
        inputTextField.style.backgroundColor = 'green';
        remarkElement.innerText = 'Correct';
    }
    else{
        inputTextField.style.backgroundColor = 'red';
        remarkElement.innerText = 'Incorrect';
    }
    inputTextField.insertAdjacentElement("afterend", remarkElement);
})

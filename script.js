function generateTable() {
    const number = document.getElementById('numberInput').value;
    let tableResult = '<h3>Multiplication Table of ' + number + '</h3>';
    for (let i = 1; i <= 10; i++) {
        tableResult += `<p>${number} x ${i} = ${number * i}</p>`;
    }
    document.getElementById('tableResult').innerHTML = tableResult;
}

function generateRandomNumbers() {
    let randomNumbers = [];
    for (let i = 0; i < 10; i++) {
        randomNumbers.push(Math.floor(Math.random() * 100) + 1);
    }
    displayRandomNumbers(randomNumbers);
    performArithmeticOperations(randomNumbers);
}

function displayRandomNumbers(numbers) {
    let display = '<h3>Random Numbers</h3><p>' + numbers.join(', ') + '</p>';
    document.getElementById('randomNumbers').innerHTML = display;
}

function performArithmeticOperations(numbers) {
    let sum = numbers.reduce((a, b) => a + b, 0);
    let product = numbers.reduce((a, b) => a * b, 1);
    let average = sum / numbers.length;
    let operationsResult = `
        <h3>Arithmetic Operations Results</h3>
        <p>Sum: ${sum}</p>
        <p>Product: ${product}</p>
        <p>Average: ${average}</p>
    `;
    document.getElementById('operationsResults').innerHTML = operationsResult;
}

function generateTwoNumbers() {
    const num1 = Math.floor(Math.random() * 100) + 1;
    const num2 = Math.floor(Math.random() * 100) + 1;
    displayTwoNumbers(num1, num2);
    performTwoNumberOperations(num1, num2);
}

function displayTwoNumbers(num1, num2) {
    let display = `<h3>Two Random Numbers</h3><p>Number 1: ${num1}</p><p>Number 2: ${num2}</p>`;
    document.getElementById('twoNumbers').innerHTML = display;
}

function performTwoNumberOperations(num1, num2) {
    let sum = num1 + num2;
    let difference = num1 - num2;
    let product = num1 * num2;
    let quotient = (num2 !== 0) ? (num1 / num2).toFixed(2) : 'Infinity';
    let operationsResult = `
        <h3>Arithmetic Operations on Two Numbers</h3>
        <p>Sum: ${sum}</p>
        <p>Difference: ${difference}</p>
        <p>Product: ${product}</p>
        <p>Quotient: ${quotient}</p>
    `;
    document.getElementById('twoNumbersResults').innerHTML = operationsResult;
}

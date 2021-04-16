function calculator(firstOperand, secondOperand, operator) {
    let operation = null;

    switch (operator) {
        case 'multiply':
            operation = (a, b) => a * b;
            break;
        case 'devide':
            operation = (a, b) => a / b;
            break;
        case 'add':
            operation = (a, b) => a + b;
            break;
        case 'substract':
            operation = (a, b) => a - b;
            break;
    }

    let result = operation(firstOperand, secondOperand);    //firstOperand и secondOperand са аргументите , които се подават от външната функция.

    console.log(result);

}

calculator(48, 8, 'devide')
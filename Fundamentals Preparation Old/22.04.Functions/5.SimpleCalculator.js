function calculator(num1, num2, action) {
    switch (action) {
        case 'multiply':return num1*num2;
            break;
        case 'divide': return num1/num2;
            break;
        case 'add':return num1+num2;
            break;
        case 'subtract':return num1- num2;
            break;
    }

}
console.log(calculator(40, 8, 'divide'));
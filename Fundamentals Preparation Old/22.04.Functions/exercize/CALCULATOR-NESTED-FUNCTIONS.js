function calculator(x, y, operator) {

    let distraction = (a, b) => {
        return a - b;
    };

    let sum = (a, b) => {
        return a + b;
    }
    if(operator === '-'){
        return distraction(x, y);
    }else if(operator === '+'){
        return sum(x, y);
    }
}

let b = calculator(1, 2, '+');
console.log(b)
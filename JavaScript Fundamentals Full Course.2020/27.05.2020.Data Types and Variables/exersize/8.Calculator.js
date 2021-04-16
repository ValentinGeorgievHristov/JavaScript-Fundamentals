 function solve(num,action,num2) {

    switch (action){
        case "+": result=(num + num2);
        break;
        case "-": result=(num - num2);
        break;case "*": result=(num * num2);
        break;
        case "/": result=(num / num2);
        break;
    }
console.log(result.toFixed(2));

 }
solve(5,
'+',
10);
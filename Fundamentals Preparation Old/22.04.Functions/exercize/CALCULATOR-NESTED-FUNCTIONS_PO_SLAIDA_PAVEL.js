function calculate(a ,b ,op) {
let calc = function(a, b, op){return op(a, b); };

let add = function(a, b){return a + b };
let substract = function(a, b){return a - b };
let multiply = function(a, b){return a * b };
let divide = function(a, b){return a / b };

switch(op){
    case '+': return calc(a,b, add);
    case '-': return calc(a,b, substract);
    case '*': return calc(a,b, multiply);
    case '/': return calc(a,b, divide);
    }
}
console.log(calculate(11, 4, '*'));   //expected output 6
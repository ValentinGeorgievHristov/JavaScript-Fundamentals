function solve(arr){

let conv = arr.map(Number);
let popped = conv.pop();

return conv[0] + popped;

}

console.log(solve(['5', '10']));
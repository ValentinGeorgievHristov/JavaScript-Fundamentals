function solve(str, n){
let result = "";

for (let i = 0; i < n; i++) {
    result += str;
}
return result
}
console.log(solve("String",2))
//
// function solve(number, power){
//     var result = 1;
//     for (let index = 0; index < power; index++) {
//      result*=number  
//     };
//     return result
// }
// console.log(solve(2, 8));
//  function solve(number, power) {

     //     return number ** power;          // първи вариант!!!

//      return Math.pow(number, power);         // втори вариант!!!
//  }
//  console.log(solve(2, 8));


//третивариант разписан отделно целия!!!
function solve(number, power){
    var result = 1;

    for (let index = 0; index < power; index++) {
     result*=number
        
    };
    return result
}
console.log(solve(2, 8));
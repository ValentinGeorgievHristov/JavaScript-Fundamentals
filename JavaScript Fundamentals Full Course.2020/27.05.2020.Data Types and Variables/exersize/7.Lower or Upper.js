 function solve(first) {
//     let value = first.charCodeAt(0)

//     if (value >= 65 && value <= 90) { //0 e индекса имаме един вход
// console.log("upper-case")
//     }else if((value >= 97 && value <= 122)){
//         console.log("lower-case")
//     }
// }
// if(first===first.toLowerCase()){                           variant2
//     console.log("lower-case")                 variant2
// }else if(first!==first.toLowerCase())                 variant2
// console.log("upper-case")                 variant2
//  }
console.log(first === first.toLowerCase() ? "lower-case" : "upper-case"); решения с тернарен оператор!
 }
solve('z');
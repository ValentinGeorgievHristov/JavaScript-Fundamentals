function solve(arr) {

let kElement = arr[0];
let firstElements = '';
let lastElements = '';
//let theTop = arr[1]+1;


    for (let i = 1; i < kElement+1; i++) {
firstElements += arr[i] + ' ';

    }
    console.log(firstElements);

    for (let i = arr.length-kElement; i < arr.length; i++) {
        lastElements += arr[i] + ' ';
        
            }
            console.log(lastElements);

}
solve([3,
    6, 7, 8, 9]  
   )
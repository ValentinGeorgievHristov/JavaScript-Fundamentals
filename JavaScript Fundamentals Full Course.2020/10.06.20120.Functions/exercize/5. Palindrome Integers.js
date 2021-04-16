function solve(arr) {
    let reversedArrayOperative = read(arr);
   // console.log(reversedArrayOperative);

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === reversedArrayOperative[i]) {
            console.log("true");
        }else{
            console.log("false");
            
        }
    };

    function read(array) {
        let reversedArray = []
        for (let i = 0; i < array.length; i++) {
            let reverse = Number(array[i].toString().split('').reverse().join(''));
            reversedArray.push(reverse);
        }
        return reversedArray
    }
    read([123, 323, 421, 121])

}
solve([123, 323, 421, 121]);

// function read(array) {
//     let reversedArray = []
//     for (let i = 0; i < array.length; i++) {

//         let reverse = Number(array[i].toString().split('').reverse().join(''));
//         //let reverse = Number(array[i].toString().split(' ').reverse().join(''));  мама ти деба :D
//         reversedArray.push(reverse);
//         //console.log(reversedArray);
//     }
// return reversedArray
// }
// console.log(read([123, 323, 421, 121]))
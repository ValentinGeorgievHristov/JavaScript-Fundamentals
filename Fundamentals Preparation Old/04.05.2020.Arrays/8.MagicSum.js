function solve(arr, magicNumber) {
let num1;
let num2;

    for (let i = 0; i < arr.length; i ++) {
        num1=arr[i];
        for(let j = i+1; j <arr.length; j++){
            num2= arr[j];

            if (num1 + num2 === magicNumber) {
                console.log(`${num1} ${num2}`); 
        }

        }
    }
}
solve([14, 20, 60, 13, 7, 19, 8],27)
//solve([1, 2, 3, 4, 5, 6],6)

function solve(arr) {

    let resultEven = 0;
    let resultOdd = 0;

    for (const el of arr) {
        if (el % 2 === 0) {
            resultEven += el
        } else {
            resultOdd += el
        }
    }
console.log(resultEven- resultOdd)
}
solve([3,5,7,9])
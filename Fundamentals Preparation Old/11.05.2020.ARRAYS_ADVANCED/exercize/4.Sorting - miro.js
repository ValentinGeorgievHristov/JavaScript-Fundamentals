function solve(arr) {

    let sorted =arr.slice().sort((a, b) => a - b);
    let revSorted =arr.slice().sort((a, b) => b - a);
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0) {
            result.push(revSorted.shift());
        } else {
            result.push(sorted.shift());
        }
    }
    console.log(result.join(' '));
}
solve([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])
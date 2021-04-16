function solve(arr) {
    let res = '';
    let sorted = arr.sort((a, b) => a - b)
    for (let i = 0; i < 2; i++) {
        res += sorted[i] + ' ';
    }
    console.log(res);

}
solve([3, 0, 10, 4, 7, 3])
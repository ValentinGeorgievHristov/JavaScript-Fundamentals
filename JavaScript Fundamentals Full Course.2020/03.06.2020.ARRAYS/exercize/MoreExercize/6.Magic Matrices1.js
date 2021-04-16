function solve(arr) {
    function calculate(a, b) {
        return (a + b)
    }
    let result1 = arr[0].reduce(calculate);
    let result2 = arr[1].reduce(calculate);
    let result3 = arr[2].reduce(calculate);
    if (result1 === result2 && result2 === result3) {
        return "true"
    } else {
        return "false"
    }
}
console.log(solve(
    [
        [1, 0, 0],
        [0, 0, 1],
        [0, 1, 0]
    ]
))
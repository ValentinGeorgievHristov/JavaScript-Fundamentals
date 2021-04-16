function solve(arr) {
    let last = Number(arr[arr.length - 1]);
    let res = '';

    for (let i = 0; i < arr.length-1; i = i + last) {
        res += arr[i] + ' ';

      
    }
    console.log(res);
}
solve(['1', '2', '3', '4', '5', '6']);
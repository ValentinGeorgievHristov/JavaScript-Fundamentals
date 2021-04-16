function solve(arr) {
    let res = '';
    for (let i = 0; i < arr.length; i++) {

        for (let j = i + 1; j < arr.length; j++) {

            if (arr[i] < arr[j]) {
                res += (arr[j] + ' ');
            } else {
                res += (arr[i] + ' ');
            }
        }
    }
    console.log(res);
}
solve([14, 24, 3, 19, 15, 17]);
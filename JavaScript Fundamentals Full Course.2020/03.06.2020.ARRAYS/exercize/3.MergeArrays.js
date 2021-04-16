function solve(arr1, arr2) {
    let result = 0;
    let resultGr = [];
    for (let i = 0; i < arr1.length; i++) {
        if (i % 2 === 0) {
            result = Number(arr1[i]) + Number(arr2[i]);
            resultGr.push(result)
        } else {
            result = arr1[i] + arr2[i];
            resultGr.push(result)
        }
    }
    console.log(resultGr.join(' - '));
}
solve(['5', '15', '23', '56', '35'],
    ['17', '22', '87', '36', '11']
);
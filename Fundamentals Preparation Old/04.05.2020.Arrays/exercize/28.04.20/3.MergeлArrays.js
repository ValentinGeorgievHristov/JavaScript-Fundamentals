function solve(arr, arr1) {     //RAZGLEDAI vajno!!!
    let res = 0;
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr1.length; j++) {

            if (i % 2 == 0 && i === j) {
                res = Number(arr[i]) + Number(arr1[j])
                result.push(res);
            } else if (i % 2 == 1 && i === j) {
                res = arr[i] + arr1[j];
                result.push(res);
            }
        }

        //console.log(result);
    }
    console.log(result.join(" - "));
}
solve(
['13', '12312', '5', '77', '4'],
['22', '333', '5', '122', '44']
)
function solve(arr1Str, arr2Str) {
    let arr1 = arr1Str.map(Number);
    let arr2 = arr2Str.map(Number);
    let isIdentical = true;
    let sum1 = 0;
    let sum2 = 0;
    for (let i = 0; i < arr1.length; i++) {

        if (arr1[i] !== arr2[i]) {
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            isIdentical == false;
            break;
        } else {
            sum1 += arr1[i];
            sum2 += arr2[i];
            // isIdentical = true
        }
    }
    if (sum1 == sum2 && isIdentical == true) {
        console.log(`Arrays are identical. Sum: ${sum1}`);
    }
}
solve(['1'], ['10'])
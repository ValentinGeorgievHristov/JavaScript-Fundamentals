function solve(arr1Num, arr2Num) {
    let arr1 = arr1Num.map(Number);
    let arr2 = arr2Num.map(Number);
    let sum = 0;
    let sum2 = 0;
    //let res = 0;
    let areEqual = true;

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            //if()
            res = i;
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            areEqual = false;
            break;

        } else {
            sum += arr1[i];
            sum2 += arr2[i];
            // isTrue;

        }
    }
    //if(isTrue==true)
    if (sum == sum2&&areEqual==true) {
        console.log(`Arrays are identical. Sum: ${sum}`);
    }
}
solve(['1'], ['10']);
//res >= 0
function solve(arr1Num, arr2Num) {
    let arr1 = arr1Num.map(Number);
    let arr2 = arr2Num.map(Number);
    let sum = 0;
    let sum2 = 0;
    //let res = 0;
    //let isTrue = false;

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            //if()
            res = i;
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            // isTrue==false;

        } else {
            sum += arr1[i];
            sum2 += arr2[i];
            // isTrue;

        }
    }
    //if(isTrue==true)
    if (sum == sum2) {
        console.log(`Arrays are identical. Sum: ${sum}`);
    }
}
solve(['1','2','3','4','5'], ['1','2','4','4','5']);
//res >= 0
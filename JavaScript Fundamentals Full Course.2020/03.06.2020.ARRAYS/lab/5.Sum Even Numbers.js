function solve(arr1) {
    let arr = arr1.map(Number);
    let even = 0;

    for (i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
         even +=arr[i];
         
        }
       
    }
    console.log(even);
}
solve(['1', '2', '3', '4', '5', '6']);
function solve(arr) {
    let after = 0
    let before = 0;
    for (let i = 0; i < arr.length; i++) {
       before += arr[i];
        if (arr[i] % 2 === 0) {
            arr[i] += i; 
        } else {
            arr[i] -= i;
        }

        after += arr[i]
    }
    console.log(arr);
    console.log(before);
    console.log(after);
}
solve([-5, 11, 3, 0, 2]);
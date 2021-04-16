function solve(arr) {
    start = 0;
    end = 0;

    for (let i = 0; i < arr.length; i++) {
        start += arr[i];

        if (arr[i] % 2 === 0) {
           arr[i]+=i;
        } else if (arr[i] % 2 === 1) {
            arr[i]-=i;
        }
        end += arr[i];
    }
    console.log(arr);
    console.log(start);
    console.log(end);




}
solve([5, 15, 23, 56, 35])
function solve(arr) {
   if (arr.length === 1) {
        console.log(arr[0]);
        return;
    }
    //let result = 0;
    for (let i = 0; i < arr.length-1; i++) {
arr[i] = Number(arr[i])+ Number(arr[i+1])  
    }
    arr.pop()
    solve(arr)
    }
solve([2,10,3]);
 
function solve(arr){
    let result = +arr[0] + +arr[arr.length-1];// result === result1;
    let result1 = Number(arr[0]) + Number(arr[arr.length-1]);

    console.log(result);
    console.log(result1);
    
}
solve(["2","3","8"]);
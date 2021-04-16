function solve(arr) {
    let isBigger = true;
    let result= "";
    for (let i = 0; i < arr.length; i++) {
        isBigger = false;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] >= arr[j]) {
                isBigger = true;
            } else {
                isBigger = false;
                result +=(`${arr[j]} `) 
            }
        }
    }
    console.log(result);
}
solve([1, 4, 3, 2])
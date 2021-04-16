function solve(length, numbers) {
    let resultArray = [];
    let result = '';

    for (let i = 0; i < length; i++) {
        resultArray[i] = numbers[i];
        // console.log(resultArray[i]);
    }
    for (let i = resultArray.length-1; i>=0; i--){
       // console.log(resultArray[i]);
        result += resultArray[i] + ' ';
        
    }
    console.log(result);
    
}
solve(3, [10, 20, 30, 40, 50]);
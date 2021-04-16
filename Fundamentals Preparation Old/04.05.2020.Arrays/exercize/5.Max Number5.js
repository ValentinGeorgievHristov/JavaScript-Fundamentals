function solve(arr) {
    result = "";
    let isMaxInteger = false;
    for (let i = 0; i < arr.length; i++) {
        isMaxInteger = true;                       //кое ни дава нужда да променяме, а да не декларираме от началото още true?
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] <= arr[j]) {
                isMaxInteger = false;
                break;
            }
        }
        if(isMaxInteger){
        result += (`${arr[i]} `)
        }
    }
    console.log(result);
}
solve([27, 19, 42, 2, 13, 45, 48])
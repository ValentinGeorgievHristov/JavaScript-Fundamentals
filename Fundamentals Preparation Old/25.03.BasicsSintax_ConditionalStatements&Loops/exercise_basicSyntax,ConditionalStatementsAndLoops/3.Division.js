function solve(number) {
    let num2 = 2;
    let num3 = 3;
    let num6 = 6;
    let num7 = 7;
    let num10 = 10;
    if (number % num10 == 0) {
        console.log(`The number is divisible by ${num10}`);
    } else if (number % num7 == 0) {
        console.log(`The number is divisible by ${num7}`);
    } else if (number % num6 == 0) {
        console.log(`The number is divisible by ${num6}`);
    } else if (number % num3 == 0){
        console.log(`The number is divisible by ${num3}`);
    }else if (number % num2 == 0){
         console.log(`The number is divisible by ${num2}`)
    }else{
        console.log("Not divisible");        
    }
}
solve(1643)
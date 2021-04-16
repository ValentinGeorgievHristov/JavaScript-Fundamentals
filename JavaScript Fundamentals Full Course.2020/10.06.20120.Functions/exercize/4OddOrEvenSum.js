function solve(number) {
    let even = 0;
    let odd = 0;
    let digits = number.toString().split('').map(Number);
    
    for (let i = 0; i < digits.length; i++) {
        if (digits[i] % 2 === 0) {
            even += digits[i]
        } else {
            odd += digits[i]
        }

    }
    console.log(`Odd sum = ${odd}, Even sum = ${even}`);

}
solve(1000435);
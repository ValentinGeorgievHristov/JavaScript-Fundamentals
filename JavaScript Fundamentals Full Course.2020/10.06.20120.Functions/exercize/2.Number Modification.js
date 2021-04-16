function solve(num) {
    let countChars = num.toString().length; // колко цифри има в числото!
    let arr = destroyNumber(num);
    let sum = 0;
    let str = num.toString();

    for (let i = 0; i < arr.length; i++) { //изчислявам сума на входа
        sum += arr[i]
    }
    //console.log(sum);


    function destroyNumber(a) {
        let num = a;
        let digits = num.toString().split('');
        let realDigits = digits.map(Number)
        return realDigits;

    }
    while (sum / countChars < 5) {
        str += 9 + '';
        sum += 9; 
        countChars++;
    }
    console.log(str);
}

(solve(101))
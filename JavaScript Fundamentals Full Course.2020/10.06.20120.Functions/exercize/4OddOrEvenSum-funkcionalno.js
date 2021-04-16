function solve(number) {

    let convert = destroyNumber(number);
    evenOdd(convert);

    function evenOdd(arr) {

        let evenSum = 0;
        let oddSum = 0;

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] % 2 === 0) {
                evenSum += arr[i];
            } else {
                oddSum += arr[i];

            }

        }
        console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`)
    }

    function destroyNumber(a) {
        let num = a;
        let digits = num.toString().split('');
        let realDigits = digits.map(Number)
        return realDigits;

    }

}
solve(1000435);
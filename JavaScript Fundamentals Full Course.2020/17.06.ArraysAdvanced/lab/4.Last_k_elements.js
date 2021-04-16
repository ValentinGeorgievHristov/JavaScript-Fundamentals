function solve(length, step) { //ЗА АНАЛИЗ!
    let arr = [1];

    let result = '';

    function arrSum(arr, len, num) {
        let sum = 0;
        let fl;
        if (len - num < 0)
            fl = 0;
        else fl = len - num;
        for (let i = len - 1; i >= fl; i--) {
            sum += arr[i];
        }

        return sum;
    }

    //console.log(arrSum([ 1, 1, 2, 4, 7, 13, 27 ], 5, 3));


    for (let i = 1; i <= length - 1; i++) {
        let x = 0;

        x = arrSum(arr, i, step)


        arr.push(x);


    }
    for (const digits of arr) {
        result += digits + ' ';
    }
    console.log(result);
}
solve(8, 2);
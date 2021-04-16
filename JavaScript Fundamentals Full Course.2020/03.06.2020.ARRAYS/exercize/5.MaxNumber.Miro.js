function solve(arr) {
    let result = '';

    for (let i = 0; i < arr.length; i++) {
        let element = arr[i];
        isBiggerEnough = true;

        for (let j = i + 1; j < arr.length; j++) {
            let nextElement = arr[j]
            if (element <= nextElement) {
                isBiggerEnough = false;
                break;
            }
        }
        if (isBiggerEnough) {
            result += `${element} `
        }
    }
    console.log(result)
}
solve([14, 24, 3, 19, 15, 17]);
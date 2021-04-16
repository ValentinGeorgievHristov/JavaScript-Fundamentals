function solve(arr1) {
    let arr = arr1.map(Number)
    let leva = 0;
    let counter = 0;
    let bitcoin = 0;
    let firstBitcoinDay = 0;
    let finalBitcoins = 0
    let rest = 0;

    for (let i = 0; i < arr.length; i++) {

        counter++;
        Number(arr[i])

        if (counter % 3 == 0) {
            leva = arr[i] * 0.7 * 67.51;

        }
        leva += arr[i] * 67.51; 
        bitcoin = leva / 11949.16;

        finalBitcoins = Math.floor(bitcoin) 
        rest = (bitcoin % 2) * 11949.16
        //console.log(bitcoin);
        if (bitcoin >= 1 && bitcoin < 2) {    // изкуствено ограничение
            firstBitcoinDay = counter
            //console.log(firstBitcoinDay);
        }

    }
    if (bitcoin >= 1) {
        console.log(`Bought bitcoins: ${finalBitcoins}`);
        console.log(`Day of the first purchased bitcoin: ${firstBitcoinDay}`);
        console.log(`Left money: ${rest.toFixed(2)} lv.`);
    } else {
        console.log('Bought bitcoins: 0');
        console.log(`Left money: ${rest.toFixed(2)} lv.`);
    }

}
solve([
    100, 200, 300
    // 3124.15 , 504.212 , 2511.124
    // 50, 100
])
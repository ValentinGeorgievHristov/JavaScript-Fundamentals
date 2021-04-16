function solve(arr1) {
    arr = arr1.slice().map(Number)
    let result = 0;
    for (let i = 0; i < arr.length; i++) {


        let countEmployerCostumersPetHour = arr[0] + arr[1] + arr[2];
        let hoursNeed = (arr[3] / countEmployerCostumersPetHour)

        for (let i = 1; i <= hoursNeed - 2; i += 4) {
            hoursNeed++
        }
        result = hoursNeed;

    }
    console.log(`Time needed: ${result}h.`);

}
solve(['1', '2', '5', '40']);
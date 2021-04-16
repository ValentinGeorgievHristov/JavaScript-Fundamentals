function solve(input) {
    let days = Number(input.shift());
    let hours = Number(input.shift());
    let hourPrice = 0;
    let sum = 0;
    
    for (let d = 1; d <= days; d++) {
        let daySum = 0;
        for (let h = 1; h <= hours; h++) {

            if (d % 2 == 0 && h % 2 !== 0) {
                hourPrice = 2.5;
                //sum += hourPrice;
            } else if (d % 2 !== 0 && h % 2 == 0) {
                hourPrice = 1.25;
                //sum += hourPrice;
            } else {
                hourPrice = 1.00;
                //sum += hourPrice;
            }
            daySum += hourPrice
        }

        console.log(`Day: ${d} - ${daySum.toFixed(2)} leva`);
        sum += daySum;
    }

   
    console.log(`Total: ${sum.toFixed(2)} leva`);
    
}
solve([
    "2",
    "5"
])
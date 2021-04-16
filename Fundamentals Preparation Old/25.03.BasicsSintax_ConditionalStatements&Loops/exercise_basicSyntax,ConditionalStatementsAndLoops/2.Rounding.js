function solve(number, precision) {
    if (precision > 15) {
        precision = 15;
    }
    //console.log(number.toFixed(precision));
    
    let output = parseFloat(number.toFixed(precision));
    console.log(output);

}
solve(10.5,3)
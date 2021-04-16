function solve(distanceMatch) {

    let distance = distanceMatch.map(Number).reduce((a, b) => a + b, 0)
    console.log(distance);

}
solve(['5', '1', '2', '3'])
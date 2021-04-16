function solve(arr, num) { //RAZGLEDAI vajno!!! samo edin cikal!!!
    let newNes = 0;
    let removed = 0;

    for (let i = 0; i < num; i++) {
        removed = arr.shift();
        arr.push(removed)
    }
    console.log(arr.join(" "));
}
solve([51, 47, 32, 61, 21], 2)
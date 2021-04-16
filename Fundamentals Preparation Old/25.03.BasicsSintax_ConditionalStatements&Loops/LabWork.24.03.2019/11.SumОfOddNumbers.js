function solve(n) {
    let count = 1;
    while (n >= 0) { //100>=count||

        if (count % 2 !== 0) {
            console.log(count);
        }
        count++
        n--;
    }
}
solve(5)
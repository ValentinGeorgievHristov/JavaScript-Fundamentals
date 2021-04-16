function solve(n) {

    for (let i = 0; i < n.length; i++) {
        for (let j = i + 1; j < n.length; j++) {
            if (n[i] === n[j]) {
                //console.log(i);
                console.log(j);
            }
        }
    }
}
solve([1, 1, 1, 2, 3, 4, 5, 6]) //Изход: 4,6
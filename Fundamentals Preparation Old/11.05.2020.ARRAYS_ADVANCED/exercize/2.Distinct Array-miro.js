function solve(arr) {
    let unique = [];
    for (let i = 0; i < arr.length; i++) {
        if (!unique.includes(arr[i])) {
            unique.push(arr[i]);
        }
    }
    console.log(unique.join(' '));
}
solve([7, 8, 9, 7, 2, 3, 4, 1, 2])
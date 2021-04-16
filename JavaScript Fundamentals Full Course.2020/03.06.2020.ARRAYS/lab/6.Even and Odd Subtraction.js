function solve(arr1) {
    let arr = arr1.map(Number)
    let even = 0;
    let odd = 0;

    for (let element of arr) {
        if (element % 2 == 0) {
            even += element;
        } else {
            odd += element;
        }

    }
    console.log(even-odd);
}
solve([1, 2, 3, 4, 5, 6])
function solve(arr) {
    for (let i = 0; i < arr.length; i++) {
        (arr[i].length).sort();
        console.log(arr[i].length);
    }
    // arr.sort();
    // console.log(arr);


}
solve(["Isacc", "Theodor", "Jack", "Harrison", "George"]);
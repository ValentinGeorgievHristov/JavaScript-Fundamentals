function sortArray(arr) {
    let sorted = []
    for (let i = 0; i < arr.length - 1; i++) {
        //console.log(arr[i].length)
        sorted = arr[i].length.sort((a, b) => a - b);


    console.log(sorted)
}

//console.log(arr[0].length)


}
sortArray(
    ["alpha", "beta", "gamma"]
)
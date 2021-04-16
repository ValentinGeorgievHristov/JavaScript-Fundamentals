function addRemove(arr) {
    let count = 0;
    let resultGlob = [];
    let result = [];
    for (let i = 1; i <= arr.length; i++) {

        if (arr[i] == "add") {
            resultGlob.push(i)
        }
        // if (arr[i] == "remove") {
        //     result.push(i)
        // }
    }
    console.log(resultGlob);
   // console.log(result);
}
addRemove(['add', 'add', 'remove', 'add', 'add'])
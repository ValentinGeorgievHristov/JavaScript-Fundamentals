function solve(brEl) {

    let arr = [3, 2, 5, 1, 4];
    let minNum = Number.MAX_SAFE_INTEGER;
    let arr2 = [];
    let indexPos = 0;
    let counter = 0;

    while (counter <= indexPos) {
        counter++;
        for (let i = 0; i < arr.length; i++) {
            //console.log(arr[i]);
            if (minNum > arr[i]) {
                minNum = arr[i];
                indexPos = i;
            }
        }
    } 
    {
        arr.splice(indexPos, 1);
        let newLength = arr2.push(minNum);
    }
    console.log(arr);
    console.log(arr2);
}

solve([12])
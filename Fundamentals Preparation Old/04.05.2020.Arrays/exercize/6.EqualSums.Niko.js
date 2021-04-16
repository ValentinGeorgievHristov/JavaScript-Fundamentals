function solve(arr) { //разгледай утре
    isIndex = false;

    if (arr.length == 1) {
        console.log(0);
    }
    for (let i = 1; i < arr.length - 1; i++) { //1
        let sumLeft = 0;
        for (let y = 0; y < i; y++) { //1111
            sumLeft += arr[y];
        }

        let sumRight = 0;
        for (let y = i + 1; y < arr.length; y++) { //1111    
            sumRight += arr[y];
        }
        // console.log(sumLeft);
        // console.log(sumRight);
        if (sumLeft == sumRight) {
            console.log(i);
            isIndex = true;
        }

    }
    if (!isIndex) {
        console.log("no");
    }
}
solve([1, 2, 3, 3])
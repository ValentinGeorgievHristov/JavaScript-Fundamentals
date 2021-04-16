function solve(arr) { //разгледай утре
    let begin = 0;
    let end = 0;
    let isEqual = true;
    let result = 0

    for (let i = 0; i < arr.length; i++) {
        for (let y = 0; y <= arr.length; y++) {
            for (let z = arr.length - 1; z > i; z--) {
                begin += arr[y]
                end += arr[z]
                if (z === i && begin !== end) {
                    begin = 0;
                    end = 0;
                }
                if (begin == end && begin == arr[i]) {
                    result = i;
                    isEqual == true;
                    // console.log(i);
                    // break;
                } else {
                    isEqual == false;
                    //console.log("no");
                    // break;
                }
            }
        }
    }
    if (isEqual == true) {
        console.log(result);
    } else if (isEqual == false) {
        console.log("no");
    }
}
solve([1, 2, 3, 3])
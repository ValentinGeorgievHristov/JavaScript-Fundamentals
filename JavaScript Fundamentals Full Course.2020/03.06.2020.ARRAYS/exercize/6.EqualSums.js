function solve(arr) {
    let result = 'no';

    for (let i = 0; i < arr.length; i++) {
        let sumLeft = 0;
        let sumRight = 0;

        for (let j = 0; j < i; j++) {
            let nextLeft = arr[j]
            sumLeft += nextLeft;
        }
        for (let j = i + 1; j < arr.length; j++) {
            let nextRight = arr[j];
            sumRight += nextRight;
        }
        if (sumLeft === sumRight) {
            result = i;
            break
            //isEqual == true;
        }
    }
    console.log(result);    
}
solve([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);
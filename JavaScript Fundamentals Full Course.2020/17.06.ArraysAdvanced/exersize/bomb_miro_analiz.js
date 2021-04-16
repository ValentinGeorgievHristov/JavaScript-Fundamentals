function solution(arr, bombInfo){ //не е завършена

    let bomb = bombInfo[0];
    let range = bombInfo[1];

    let index = arr.indexOf(bomb);

    while(index > -1){

        arr.splice(Math.max((index-range),0),Math.min(range, index));   // left detonation;

        index = arr.indexOf(bomb);
    }

    console.log(calculatorSum(arr));

    function calculatorSum(array){

        let sum = 0;

        for(let n of array){
            sum += n;
        }
        return sum;
    }

}
console.log(solution([1, 7, 7, 1, 2, 3],
    [7, 1]
    ))
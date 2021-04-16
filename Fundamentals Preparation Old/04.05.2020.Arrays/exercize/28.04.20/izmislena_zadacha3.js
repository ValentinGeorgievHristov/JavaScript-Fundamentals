function solve(arr) {
    let resultEven = [];
    let resultOdd = [];
    let globalResult = [];
   

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            resultEven.push(arr[i]);
        } else if (arr[i] % 2 === 1) {
            resultOdd.push(arr[i]);
        }
     
    }
    for(let z=0; z<resultEven.length; z++){
        globalResult.push(resultEven[z]);
       
    }
    for(let v=0; v<resultOdd.length; v++){
        globalResult.push(resultOdd[v]);
    }


    // console.log(resultEven);
    // console.log(resultOdd);
     console.log(globalResult);
    //console.log(globalResult1);
    

}
solve([1, 222, 3, 4, 5, 6, 7, 8])
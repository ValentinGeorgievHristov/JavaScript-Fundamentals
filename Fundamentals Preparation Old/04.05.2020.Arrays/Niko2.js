function solve(brEl) {
    let minNum = Number.MAX_SAFE_INTEGER;
    let maxNum = Number.MIN_SAFE_INTEGER;
    let arr = [3,2,5,1,4];
    let sum= 0;

    // for (let i = 0; i < brEl; i++) {
    //     //arr[i] = +(Math.random() * 100).toFixed();
    // }
    //console.log("---------------------------------------------------------");
    //for( let i=0; i < arr.length; i++)
       // console.log(arr[i]); 

    for( let i=0; i < arr.length; i++){
    
        sum += +arr[i]
    //kontrolen print //
   
    if ( minNum > arr[i]) {        
        minNum = arr[i] ;
    } 
    if (maxNum < arr[i]) {
        maxNum = arr[i] ;
    }
}
   

  // 1,2,3,4,5

    //console.log(arr[i]);

    //max!!!
    //min!!!
    //Suma elementi masiv(randomite)

    // for (let i=0; i<arr.length; i++)
    //console.log(arr);
    console.log("---------------------------------------------------------");
    console.log(minNum);
    console.log(maxNum);
    console.log(sum);
}

solve([12])
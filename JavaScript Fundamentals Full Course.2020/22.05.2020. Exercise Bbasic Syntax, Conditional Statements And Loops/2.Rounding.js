function solve(num, signRounding) { 
    let result = num;
    let granica = 15;
    if (signRounding>granica){
        signRounding=granica
    }

    let res=result.toFixed(signRounding)
    let res1= Number.parseFloat(res)
    console.log(res1);
   

}
solve(2.1515151515151515151515151515151515151515115,2)
function solve(arr){
   // let arr = [5, 15, 23, 56, 35];
    let result = 0;
    let sumOe =0;
    let sumAfter =0;
    
    for( let i = 0; i<arr.length; i++){
        sumOe +=arr[i];
            if(arr[i]%2==0){
           arr[i] += i;
        }else{
            arr[i] -=  i;
        }
        sumAfter +=arr[i];
}
    console.log(arr);
    console.log(sumOe);
    console.log(sumAfter);
    

}
solve([5, 15, 23, 56, 35])
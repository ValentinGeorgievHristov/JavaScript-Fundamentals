function name(arr) {
   let sumBefore=0;
   let sumAfter=0;
    for (let i=0; i<arr.length; i++){
        sumBefore+=arr[i] ;   //arr[i] - елемент на масива 
        if(arr[i]%2===0){
            arr[i]+= i;
        }else{
            arr[i]-= i; 
        }
        sumAfter+=arr[i];
    }
    console.log(arr);
   console.log(sumBefore);
   console.log(sumAfter);
}
name([5, 15, 23, 56, 35]);
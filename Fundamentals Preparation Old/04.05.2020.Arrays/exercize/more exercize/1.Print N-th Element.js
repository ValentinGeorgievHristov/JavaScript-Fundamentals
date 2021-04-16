function solve(arr1) {
    let arr = arr1.map(Number);
    let popped=arr.pop();
    let res=" ";
    let res1 = 0;
     
    
    for(let i=0; i<arr.length; i+=popped){
        res+=arr[i]  + " ";
        
        
    }
  
    console.log(res)
        
}
solve(['5', '20', '31', '4', '20', '2']);
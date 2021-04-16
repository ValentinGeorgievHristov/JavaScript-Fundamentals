function solve(arr) {
    let key = arr.pop();
    key1 = +key;
    let result = "";

    for (let i = 0; i < arr.length; i += key1) {
        // console.log(arr[i]+ " ");
      result+= arr[i] + " ";
     
      
        
      
       
    }
    console.log(result);
}
solve(['5', '20', '31', '4', '20', '2'])
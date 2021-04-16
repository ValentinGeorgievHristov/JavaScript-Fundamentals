function name(arr) {
    // let originalSum = 0;
    // let modifiedSum = 0;
    let outputArr = [];
  //console.log(outputArr.reduce((firstElement,secondElement)=>firstElement+secondElement,0));
    
    for (let i = 0; i <= arr.length - 1; i++) {

        if (arr[i] % 2 === 0) {
         
            outputArr.push(arr[i]+1);
        } else {
            
            outputArr.push(arr[i]-1);
        }
        
    }
    console.log(outputArr);

    console.log(arr.reduce((firstElement, secondElement) => firstElement + secondElement,0));
    
    console.log(outputArr.reduce((firstElement, secondElement) =>firstElement +secondElement, 0));
    
}
name([5, 15, 23, 56, 35]);
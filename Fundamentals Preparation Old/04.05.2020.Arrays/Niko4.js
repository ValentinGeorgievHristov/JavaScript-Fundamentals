function solve(brEl) {

    let minNum = Number.MAX_SAFE_INTEGER;
    let arr = [3, 2, 5, 1, 4];
    let arr2 = [];
    let indexPos=0;
    let counter = 0;

    
    for (let i = 0; i < arr.length; i++) {
        //console.log(arr[i]);
        if (minNum > arr[i]) {
            minNum = arr[i];
            indexPos = i;             
        }
    } 
    {
        //Add new element to secodn array
        //remove element from first array
        arr.splice(indexPos, 1);
       let newLength = arr2.push(minNum);
    }
//скобата на while
    //console.log(minNum);
  //let j=0;
  //arr2[j]=minNum;
    console.log(arr);
    console.log(arr2);
}
solve([12])
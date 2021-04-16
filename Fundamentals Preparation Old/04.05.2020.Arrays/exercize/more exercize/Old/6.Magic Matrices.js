function matrix(arr) { //deba
   
 function calcSum(a,b){
     return (a+b);
  }

 let sumOne = arr[0].reduce(calcSum);
 let sumTwo = arr[1].reduce(calcSum);
 let sumTree = arr[2].reduce(calcSum);

if(sumOne==sumTwo&&sumTwo==sumTree){
    console.log(true);    
}else{
    console.log(false);
}

}
matrix([
    [1, 0, 0],
 [0, 0, 1],
 [0, 1, 0]


])
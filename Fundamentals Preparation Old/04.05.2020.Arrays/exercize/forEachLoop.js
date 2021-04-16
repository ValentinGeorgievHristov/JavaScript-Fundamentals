function solve(arr){

    arr[9]=89;

arr.forEach((element, index, arr) => console.log(element,index));

arr.forEach(myFunction);
function myFunction(item, index, arr) {
    console.log(arr[index],index);
  } 

}
solve(["apple", "orange", "cherry","0"])
//arr.forEach((el. i, ar) => console.log(el,i));
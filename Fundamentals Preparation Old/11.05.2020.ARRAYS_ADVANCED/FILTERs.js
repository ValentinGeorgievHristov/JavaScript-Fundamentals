function solve(arr){

//  function filt(num){
//      return num > 5;
 //}

    let zzz = arr.filter(num =>num>5)
             .map(num =>num*2);

    console.log(zzz)
    console.log(arr)
}
solve(
    ["alpha", "beta", "gamma"]
)
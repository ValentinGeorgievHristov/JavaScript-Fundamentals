function solve(arr) {
let personal = 0;

     for (let i = 0; i < arr.length; i++) {
        personal = arr[i].toString().split("").reverse().join("");

        if(arr[i]==personal){
            console.log('true');
        }else{
            console.log('false');
        }     
    }
}
solve([123, 323, 421, 121])
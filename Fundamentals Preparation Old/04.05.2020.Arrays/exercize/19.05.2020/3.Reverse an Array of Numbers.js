function solve(num,arr) {
    let rev=[];
for(let i=0; i<=num-1; i++){
//arr[i].reverse();
rev.unshift(arr[i])
//console.log(rev);

}
console.log(rev.join(' '))
}
solve(4, [-1, 20, 99, 5])

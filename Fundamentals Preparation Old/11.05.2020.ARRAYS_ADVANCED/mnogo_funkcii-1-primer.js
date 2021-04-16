function solve(arr) {
    let res = arr
    .filter((x,i) => i % 2 != 0)
    .map(x=>x*2)
    .reverse()
    .join(' ');

console.log(res)
}
solve([10,15,20,25])
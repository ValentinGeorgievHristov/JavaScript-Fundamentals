function solve(n) {
    let result = '';

    for (let cow = 1; cow <= n; cow++) {
        for (let row = 1; row <= n; row++) {
            result +=`${n} `;                 
        }
        console.log(result);
        result = '';                   //???? нулира променливата с информацията.
    }
}
solve(4);
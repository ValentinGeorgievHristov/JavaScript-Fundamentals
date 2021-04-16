function solve(n1, n2) {
    let sum = 0;
    let line ="";                    // събиране в стринг
    for (let i = n1; i <= n2; i++) {
        sum+=i;
        line +=i + " ";
        
    }
    console.log(line + " ");         // събиране в стринг
    console.log(`Sum: ${sum}`);        // събиране в стринг
}
solve(0, 26);
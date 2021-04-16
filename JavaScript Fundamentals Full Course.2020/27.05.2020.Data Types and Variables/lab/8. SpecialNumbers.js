function special(n) {
    let result = 0;
    let result2 = 0;
 
    for (let i = 1; i <= n; i++) {
    
        let sum = 0;

        if (i < 10) {
            result = i
        } else {
            result = parseInt(i / 10)
            result2 = i % 10;
            sum = result + result2;
        }

        
        if (i < 10 && i == 5 || i == 7 || sum == 11 || sum == 5 || sum == 7) {
            console.log(`${i} -> True `);
        } else {
            console.log(`${i} -> False`);
        }
    }
}

special(15);
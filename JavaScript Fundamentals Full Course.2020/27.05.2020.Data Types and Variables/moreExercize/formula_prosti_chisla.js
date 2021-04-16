function solve(N) {

 
    if (N < 2)
        return false;
    for (let i = 2; i * i <= N; i++) {
        if (N % i == 0)
            return false;
    }
    return true;
}
console.log(solve(8));

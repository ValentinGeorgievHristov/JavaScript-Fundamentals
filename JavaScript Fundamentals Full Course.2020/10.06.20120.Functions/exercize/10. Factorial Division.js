function solve(numOne, numTwo) {

    let globalFactorial = factorial(numOne)
    

    let globalFactorial2 = factorial(numTwo)
    let result = (globalFactorial/globalFactorial2).toFixed(2)
    console.log(result);

    function factorial(a) {
        let number = 1;
        for (let i = a; i > 0; i--) {
            number *= i
        }
        return number
    }
}
solve(5, 2);
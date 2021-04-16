function solve(firstNumber, secondNumber, thirdNumber) {

let firstStep = addNumber(firstNumber,secondNumber)

let secondStep = substract(firstStep,thirdNumber)
console.log(secondStep);


    function addNumber(a, b) {
        return a + b;
    }

    function substract(a,b){
        return a-b;
    }

}

solve(1, 5, 3)
function solve(num1, num2, num3) {
    if (num1 < 0 && num2 > 0 && num3 > 0) {
        return "Negative";
    } else if (num2 > 0 && num2 < 0 && num3 > 0) {
        return "Negative";
    } else if (num1 > 0 && num2 > 0 && num3 < 0) {
        return "Negative";
    } else if (num1 < 0 && num2 < 0 && num3 > 0) {
        return "Possitive"
    } else if (num1 > 0 && num2 < 0 && num3 < 0) {
        return "Negative";
    } else if (num1 < 0 && num2 < 0 && num3 < 0) {
        return "Negative"
    }else if(num1<0&& num2===0&&num3>0){
        return"Positive"
    }
}
console.log(solve(-6,-12,4));
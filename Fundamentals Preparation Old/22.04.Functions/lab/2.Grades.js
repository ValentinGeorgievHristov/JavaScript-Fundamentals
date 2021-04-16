function solution(num) {
    if (num < 2) {
      
    } else if (num >= 2 && num <= 2.99) {
        return "Fail";
    } else if (num <= 3.49) {
        return "Poor";
    } else if (num <= 4.49) {
        return "Good";
    } else if (num <= 5.49) {
        return "Very good";
    } else if (num <= 6.00) {
        return "Exellent";
    }else{
        return;
    }

}
console.log(solution(1.00));
function solve(arr) {
    result = "";
    let isMaxInteger = false;
    for (let i = 0; i < arr.length; i++) {
        isMaxInteger = false;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                isMaxInteger = true;

            } else {
                isMaxInteger = false;
                break;
            }
        }
        if(isMaxInteger || i==arr.length-1){   //защо -1 влияе при отпечатването на последния знак.
        result += (`${arr[i]} `)
        }
    }
    console.log(result);
}
solve([41, 41, 34, 20])
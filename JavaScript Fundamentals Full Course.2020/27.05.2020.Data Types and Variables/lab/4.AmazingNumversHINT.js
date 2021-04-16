function name(num) {

    num = num.toString();
    let sum = 0;
    for (let i = 0; i < num.length; i++) {
        sum += Number(num[i])
        // console.log(sum)
    }
    let result = sum.toString().includes('9');
    console.log(result
        ? `${num} Amazing? True`
        : `${num} Amazing? False`);
    
}
name(1233);
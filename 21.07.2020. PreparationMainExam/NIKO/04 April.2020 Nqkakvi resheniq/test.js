function cutF(str, a, b) {
    let res1 = '';
    let res2 = '';

    for (let i = 0; i < str.length; i++) {
        if (i < a) {
            res1 += str[i];
        } else if (i >= (a + b)) {
            res2 += str[i];
        }
    }

    let pass = res1.concat(res2)
    console.log(pass);
        return pass;

        
    
}
cutF('icecream::hot::summer', 15, 3)
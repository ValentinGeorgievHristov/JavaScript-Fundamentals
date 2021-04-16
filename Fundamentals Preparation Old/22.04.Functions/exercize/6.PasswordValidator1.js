function palindrome(arr) {          //ГРЕШНО! ГРЕШНО! ГРЕШНО!
    let res1 = arr[0];
    let res2 = arr[1];
    let res3 = arr[2];
    let res4 = arr[3];
    let res1rev = res1.toString().split("").reverse().join("");
    let res2rev = res2.toString().split("").reverse().join("");
    let res3rev = res3.toString().split("").reverse().join("");
    let res4rev = res4.toString().split("").reverse().join("");
    let res = [res1, res2, res3, res4];
    let resRevGen = [res1rev, res2rev, res3rev, res4rev];

    
    for (let i = 0; i < 4; i++) {
        if (res[i] === resRevGen) {
            console.log("true");
        } else {
            console.log("false");
        }
    }


}
palindrome([123, 323, 421, 121]);
function solve(l1, l2) {
    let result = '';

    let convertArray = letter(l1, l2);

    for (let i = convertArray[0] + 1; i < convertArray[1]; i++) {
        //console.log(i)

        result += String.fromCharCode(i) + ' ';
    }
    // }

    console.log(result);


    function letter(a, b) {
        let letter1 = a.charCodeAt(0);
        let letter2 = b.charCodeAt(0);
        let letter3 = 0;

        if (letter1 > letter2) {
            letter3 = letter1;
            letter1 = letter2;
            letter2 = letter3;

        }
        let array = [letter1, letter2];
        return array;
    }

    // for (let i = letter1 + 1; i < letter2; i++) {

    //     result += String.fromCharCode(i) + ' ';

    // }

    // console.log(result);

}
solve('a', 'f')
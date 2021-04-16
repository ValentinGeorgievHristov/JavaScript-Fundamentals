function race(input) {
    let pass = input.shift();
    let next = input.shift();
    while (!(next == 'Done')) { //(next !== 'Done')
        let commands = next.split(' ');
        let command = commands[0]
        //console.log(command);
        let one = Number(commands[1]);
        let two = Number(commands[2]);

        switch (command) {
            case 'TakeOdd':
                pass = takeOddF(pass);
                console.log(pass);
                break;
            case 'Cut':
                // let one = Number(commands[1]);
                // let two = Number(commands[2]);
                pass = cutF(pass, one, two);
                console.log(pass);
                break;
            case 'Substitute':
                one = commands[1];
                two = commands[2];

                if (pass.includes(one)) {
                    pass = substituteF(pass, one, two);
                    console.log(pass);
                    break;
                } else {
                    console.log('Nothing to replace!');
                }

        }


        next = input.shift();
    }
    console.log(`Your password is: ${pass}`);

    function takeOddF(str) {

        let pass = '';
        for (let i = 0; i < str.length; i++) {
            if (i % 2 !== 0) {
                pass += str[i];

            }
        }
        return pass;
    }

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
        return pass;
    }

    function substituteF(str, a, b) {


        while (str.indexOf(a) > -1) {
            str = str.replace(a, b);
        }
        let pass = str;
        return pass;
    }
}
race(
    [
        'Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr ',
        'TakeOdd',
        'Cut 15 3',
        'Substitute :: -',
        'Substitute | ^',
        'Done'
    ]
)
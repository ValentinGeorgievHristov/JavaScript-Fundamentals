function solve(input) {
    let text = input.shift();

    let commands = input.shift();
    while (commands !== 'Generate') {
        let [command, one, two, three] = commands.split('>>>');
       

        switch (command) {
            case 'Contains':
                let textContains = contains(text, one);
                console.log(textContains);
                break;
            case 'Flip':
                switch (one) {
                    case 'Upper':
                        text = upper(text, two, three);
                        console.log(text);
                        break;
                    case 'Lower':
                        text = lower(text, two, three);
                        console.log(text);;
                        break;
                }
                break;
            case 'Slice':
                one = Number(one);
                two = Number(two);
                text = slice(text, one, two);
                console.log(text);
                break;
                // case 'Generate': console.log(xxx);
                //     break;
        }
        commands = input.shift();
    }
    console.log(`Your activation key is: ${text}`);

    function slice(str, a, b) {                         //SLICE TO INDEX PARSE a, b- to Number!

        let first = str.slice(0, a);
        let second = str.slice(b, str.length);
        str = first.concat(second)

        return str;
    }

    function upper(str, a, b) {                              //UPPER-CASE
        let first = str.slice(0, a);
        let second = str.slice(b, str.length);
        let middle = str.slice(a, b).toUpperCase()

        str = first.concat(middle).concat(second)

        return str;
    }

    function lower(str, a, b) {                                 //LOWER-CASE
        let first = str.slice(0, a);
        let second = str.slice(b, str.length);
        let middle = str.slice(a, b).toLowerCase()

        str = first.concat(middle).concat(second)

        return str;
    }

    function contains(str, key) {                               //INCLUDES
        if (str.includes(key)) {
            return (`${str} contains ${key}`)
        } else {
            return ('Substring not found!')
        }
    }
}
solve(
    [
        '134softsf5ftuni2020rockz42',
        'Slice>>>3>>>7',
        'Contains>>>-rock',
        'Contains>>>-uni-',
        'Contains>>>-rocks',
        'Flip>>>Upper>>>2>>>8',
        'Flip>>>Lower>>>5>>>11',
        'Generate'
      ]
)
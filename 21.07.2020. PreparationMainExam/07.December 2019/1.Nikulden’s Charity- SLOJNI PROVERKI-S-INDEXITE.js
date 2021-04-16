function solve(input) {

    let message = input.shift();
    let line = input.shift();

    while (line !== 'Finish') {
        let [command, first, second] = line.split(' ');

        switch (command) {
            case 'Replace':
                message = replacing(message, first, second);
                console.log(message);
                break;
            case 'Cut':
                first = Number(first);
                second = Number(second);
                if ((second > message.length - 1) || (first > second) || (first < 0)) {
                    console.log('Invalid indexes!');
                } else {
                    message = cutting(message, first, second);
                    console.log(message);
                }
                break;
            case 'Make':
                switch (first) {
                    case 'Upper':
                        message = upper(message);
                        console.log(message);;
                        break
                    case 'Lower':
                        message = lower(message);
                        console.log(message);;
                        break
                };
                break;
            case 'Check':
                let newMessage = checking(message, first);
                console.log(newMessage);;
                break;
            case 'Sum':
                first = Number(first)
                second = Number(second)
                if ((second > message.length - 1) || (first > second) || (first < 0)) {
                    console.log('Invalid indexes!');
                } else {
                    let char = summing(message, first, second);
                    console.log(char);
                }

                break;
        }
        line = input.shift();
    }

    function replacing(message, first, second) {

        while (message.indexOf(first) >= 0) {
            message = message.replace(first, second);
 
        }
        return message
    }

    function upper(message) {

        message = message.toUpperCase();
        return message
    }

    function lower(message) {

        message = message.toLowerCase();
        return message
    }

    function checking(message, word) {

        if (message.includes(word)) {
            return `Message contains ${word}`
        } else {
            return `Message doesn't contain ${word}`
        }

    }

    function summing(message, first, second) {

        let sumPiece = message.substr(first, second);

        let char = sumPiece.split('');

        let result = 0;
        for (let i = 0; i < char.length; i++) {
            result += sumPiece.charCodeAt(i)
        }
        return result
    }

    function cutting(message, first, second) {

        let result = '';
        first = message.substr(0, first);
        second = message.substr(second + 1, message.length);
        //  console.log(first);
        //  console.log(second);
        result = first.concat(second)
        return result

    }
}
solve(
    [
        'ILikeSharan',
        'Replace a e',
        'Make Upper',
        'Check SHEREN',
        'Sum 1 4', //
        'Cut 1 4',
        'Finish'
    ]
    // [
    //     'HappyNameDay',
    //     'Replace p r',
    //     'Make Lower',
    //     'Cut 2 23',
    //     'Sum -2 2',
    //     'Finish'
    // ]
)
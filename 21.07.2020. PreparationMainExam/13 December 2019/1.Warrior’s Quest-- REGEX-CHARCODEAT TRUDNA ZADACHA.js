function solve(input) {
    let text = input.shift();

    let commands = input.shift();
    // console.log(commands);
    while (commands !== 'For Azeroth') {

        let [command, digit, word, one] = commands.split(' ')

        switch (command) {
            case 'GladiatorStance':
                text = gladStance(text);
                console.log(text);
                break;
            case 'DefensiveStance':
                text = defensiveStance(text);
                console.log(text);
                break;

            case 'Dispel':
                if (text.length > Number(digit)) {
                    text = dispel(text, digit, word);
                    console.log(`Success!`)
                } else {
                    console.log('Dispel too weak.');
                }
                break;

            case 'Target':
                switch (digit) {
                    case 'Change':
                        text = targetChange(text, word, one);
                        console.log(text);;
                        break;
                    case 'Remove':
                        text = targetRemove(text, word);
                        console.log(text);;;
                        break;
                }
                break;
            default:
                console.log("Command doesn't exist!");
        }

        commands = input.shift();
    }

    function gladStance(str) {

        str = str.toUpperCase();
        return str

    }

    function defensiveStance(str) {

        str = str.toLowerCase();
        return str

    }

    function dispel(str, indexText, letter) {

        let index = Number(indexText)

        let splitted = str.split('');


        sindexCharacter = str.charAt(index);
        str = str.replace(sindexCharacter, letter)

        return str;
    }

    function targetChange(str, sub, replaceSub) {

        str = str.replace(sub, replaceSub);
        return str;

    }

    function targetRemove(str, remove) {

        let matchStr = str.match(remove);
        let startRemIndex = matchStr.index;
        //console.log(startRemIndex);
        str1 = str.slice(0, startRemIndex)
        str2 = str.slice(startRemIndex + (remove.length), str.length)
        str = str1.concat(str2);
        return str
    }

}
solve(
    // [
    //     'fr1c710n',
    //     'GladiatorStance',
    //     'Dispel 2 I',
    //     'Dispel 4 T',
    //     'Dispel 6 O',
    //     'Dispel 5 I',
    //     'Dispel 10 I',
    //     'Target Change RICTION riction',
    //     'For Azeroth'
    // ]

    [
        'DYN4MICNIC',
        'Target Remove NIC',
        'Dispel 3 A',
        'DefensiveStance',
        'Target Change d D',
        'target change D d',
        'For Azeroth'
    ]

)
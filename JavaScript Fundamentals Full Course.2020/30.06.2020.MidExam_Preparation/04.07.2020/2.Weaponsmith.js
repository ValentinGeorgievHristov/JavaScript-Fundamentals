function solve(arr) {
    let weapenParts = arr[0].split('|');
    // for (let i = 0; i < weapenParts.length; i++) {
    //     if (i % 2 == 0) {
    //         console.log(`even ${weapenParts[i]}`);
    //     }else{
    //         console.log(`odd ${weapenParts[i]}`);
    //     }
        

    }
    let length = weapenParts.length;
    let weapen = '';
    //console.log(weapenParts);
    let commands = arr.slice(1)
    // console.log(commands);
    let even = '';
    let odd = '';

    for (let i = 0; i < commands.length; i++) {

        let splitCommands = commands[i].split(' ')
        let command = splitCommands[0];
        let direction = splitCommands[1];
        let move = Number(splitCommands[2]);
        let index = splitCommands.indexOf(move);
        let piece = []

        if (direction == 'Left' && index <= length) {
            piece = (weapenParts.splice(index, 1)).toString();
            weapenParts.splice(move - 1, 0, piece);
        } else if (direction == 'Right' && index <= length) {
            piece = (weapenParts.splice(move, 1)).toString();
            weapenParts.splice(move + 1, 0, piece);
            //console.log(piece);
        } // else if (i % 2 == 0) {
        //     even += weapenParts[i] + ' ';
        //     console.log(even);

        // } else if (i % 2 == 1) {
        //     odd += weapenParts[i] + ' ';
        //     console.log(odd);

        //    }
        //console.log(weapenParts);
        // console.log(even);
        // console.log(odd);
    // }
    for (let el of weapenParts) {
        weapen += el + '';
    }

    console.log(`You crafted ${weapen}!`);
}
console.log(solve([
    'ha|Do|mm|om|er',
    'Move Right 0',
    'Move Left 3',
    'Check Odd',
    'Move Left 2',
    'Move Left 10',
    'Move Left 0',
    'Done'
]))
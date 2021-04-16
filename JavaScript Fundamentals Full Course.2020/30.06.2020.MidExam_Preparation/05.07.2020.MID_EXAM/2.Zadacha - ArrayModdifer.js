function solve(originalArray) {
    let commands = originalArray.slice();
    let listOriginal = commands.splice(0, 1)
    let list = listOriginal[0].split(' ').map(Number);
    let result = '';
    //console.log(list);

    for (let i = 0; i < commands.length; i++) {
        let splitted = commands[i].split(' ');
        let command = splitted[0];
        let firstIndex = Number(splitted[1]);
        let secondIndex = Number(splitted[2]);

        if (command == 'swap') {
            if (secondIndex == 0) {
                let first = Number(list.splice(firstIndex, 1)) //87
                let second = Number(list.splice(secondIndex, 1)) // 23

                list.splice(secondIndex, 0, second);
                list.splice(secondIndex, 0, first);
            } else {
                let first = Number(list.splice(firstIndex, 1))
                let second = Number(list.splice(secondIndex - 1, 1))
                list.splice(firstIndex, 0, second);
                list.splice(secondIndex, 0, first);
            }
        } else if (command == 'multiply') {
            // let first = Number(list.splice(firstIndex, 1))
            // let second = Number(list.splice(secondIndex - 1, 1))
            // let multiplyed = first * second;
            // list.splice(firstIndex, 0, multiplyed);
            // list.splice(secondIndex, 0, second);
            if (firstIndex < secondIndex) {
                let first = Number(list.splice(firstIndex, 1))
                let second = Number(list.slice(secondIndex - 1, secondIndex))
                let multiplyed = first * second;
                list.splice(firstIndex, 0, multiplyed);
            } else if (firstIndex > secondIndex) {
                let first = Number(list.splice(firstIndex, 1))
                let second = Number(list.slice(secondIndex, secondIndex + 1))
                let multiplyed = first * second;
                list.splice(firstIndex, 0, multiplyed);
            }
        } else if (command == 'decrease') {
            list = list.map(x => x - 1)
        } else if (command == 'end') {
            break;
        }

    }
    //console.log(list);
    for (let el of list) {
        result += el + ', ';
    }
console.log(result);

}
solve(['1 2 3 4',
    'swap 0 1',
    'swap 1 2',
    'swap 2 3',
   'multiply 1 2',
   'decrease',
    'end'
    
]);
function solve(arr) {
    //let list = Number(arr.slice(0, 1))
    let list1 = arr.slice(0, 1)
    let splittedList = list1[0].split(' ');
    let commands = arr.splice(1);

    //console.log(list1);

    for (let i = 0; i < commands.length; i++) {
        let splitted = commands[i].split(' ');
        let command = splitted[0];
        let firstIndex = Number(splitted[1])
        let secondIndex = Number(splitted[2])
        //   console.log(typeof firstCom);

        switch (command) {
            case 'swap':
                let firstNum = Number(splittedList.splice(firstIndex, 1))
                let secondNum = Number(splittedList.splice(secondIndex - 1, 1))
                splittedList[firstIndex]= secondNum;
                splittedList[secondIndex]= firstNum;

console.log(splitted);

                // splittedList.splice(firstIndex+1, 0, secondNum);
                // splittedList.splice(secondIndex-1, 0, firstNum);
                // console.log(first);
                // console.log(second);

                break;
                //case ''


        }


        //console.log(splittedList);

        // console.log(list1);
    }
    //console.log(commands);

    console.log(splittedList);

}
solve(['23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'
]);
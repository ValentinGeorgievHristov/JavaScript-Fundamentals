function solve(commands) {   // не я преписах добре

    let arr = commands
        .shift()
        .split(' ')
        .map(Number);

    for (let i = 0; i < arr.length; i++) {                   //?? tuk e chupimo
        let [command, firstNum, secondNum] = commands[i].split(' ');

        firstNum = Number(firstNum);
        secondNum = Number(secondNum);

        switch (command) {
            case 'Add':
                break;
            case 'Remove':
                break;
            case 'RemoveAt':
                break;
            case 'Insert':
                break;
        }

        function add(el) {
            arr.push(el);
        }

        function remove(num) {
            arr = arr.filter(el => el !== num);
        }

        function removeAt(index) {
            arr.splice(index, 1);
        }
function insert(num, index){
    arr.splice(index,0,num);
}
    }

}
solve(['4 19 2 53 6 43',
    'Add 3',
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3'
])
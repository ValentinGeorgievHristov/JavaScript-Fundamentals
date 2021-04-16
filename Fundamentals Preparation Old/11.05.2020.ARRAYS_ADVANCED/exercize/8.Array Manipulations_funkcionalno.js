function solve(arr) { //1                     ??????
    let manipulationsListWork = arr.splice(0, 1); // не е сплитнат
    let manipulationsList = manipulationsListWork[0].split(' '); //СПЛИТНАТ РЕЗУЛТАТ//
    let result = []
    let resultEnd = '';

    for (let i = 0; i < arr.length; i++) { //2
        let commands = arr[i].split(' ');
        let command = commands[0];
        let numOne = commands[1];
        let numTwo = commands[2];

        if (command === 'Add') { //3
            result = adding(manipulationsList, numOne);
        } else if (command === 'Remove') {
            result = removing(manipulationsList, numOne);
        } else if (command === 'RemoveAt') {
            result = removingAt(manipulationsList, numOne);
        } else if (command === 'Insert') {
            result = inserting(manipulationsList, numOne, numTwo)
        }

        //console.log(removing);
    }
    //console.log(result);

   

    function adding(arr, num) {

        arr.push(num)
        return arr;
    }

    function removing(arr, num) {

        arr = arr.filter(el => el !== num)
        return arr;
    }

    // function removing(arr, num) {

    //     arr.splice(num, 1)
    //     return arr;
    // }

    function removingAt(arr, num) {

        arr.splice(num, 1)
        return arr;
    }

    function inserting(arr, numOne, numtwo) {

        arr.splice(numtwo, 0, numOne)
        return arr;
    }
    for (let element of result) {
        resultEnd += element + ' ';
    }

console.log(resultEnd);
}
solve(['4 19 2 53 6 43',
    'Add 3',
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3'
])

// 
// 'Insert 8 3'
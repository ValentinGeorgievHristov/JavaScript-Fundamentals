function solution(arr, comm) {
    let commands = comm[0].split(' '); //за втората функция използвам този масив addMany
    //console.log(commands);

    let command = commands[0];
    //console.log(typeof command)
    let a = commands[1];
    let b = commands[2];
    let many = commands.splice(1)
    //console.log(many)       let cat = new Cat(name, Number(ageText));   // ot tuk vlizat vav classes

    debugger
    // приема arr , a, b  за вход
    function adding(arr, a, b) {

        let add1 = arr.splice(a, 0, b)
        return arr



    }
    // addingMany приема масив Commands за вход!
    function addingMany(arr, many) {

        for (let i = 1; i < many.length; i++) {


            arr.push(many[i])
        }
        return arr;

    }
    // приема arr , a  за вход
    function containing(arr, a) {
        let result = 0;
        //// приема arr , a, b  за вход
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === a) {
                result = i;
                break;
            } else {
                result = -1;
            }
        }
        return result;
    }
    // приема arr , a  за вход
    function removing(arr, a) {

        arr.splice(a, 1)


        return arr;
    }
    // приема arr , a  за вход
    function shifting(arr, a) {

        for (let i = 0; i < a; i++) {
            arr.shift();

        }
        return arr;
    }
    // приема arr , a  за вход
    function pairs(arr, a) {
        let result = 0;
        for (let i = 0; i < arr.length; i += 2) {
            result += arr[i] + (arr[i] + 1)

        }
        return result;
    }

    function printing(arr, a) {

        return arr;
    }
    for (let j = 0; j < command.length; j++) {
        

        if (command[j] == 'add') {
            adding(arr, a, b);
           result = arr;
        } else if (command[j] == 'addMany') {
            addingMany(arr, many);
            result = arr;
        } else if (command[j] == 'contains') {
            containing(arr, a);
            result = arr;
        } else if (command[j] == 'remove') {
            removing(arr, a);
            result = arr;
        } else if (command[j] == 'shift') {
            shifting(arr, a);
            result = arr;
        } else if (command[j] == 'sumPairs') {
            pairs(arr, a);
            result = arr;
        } else if (command[j] == 'sumPairs') {
            pairs(arr, a);
            result = arr;
        } else if (command[j] == 'print') {
            printing;
            result = arr;

        }
        console.log(result);
        
    }
}
console.log(solution([1, 2, 4, 5, 6, 7],
        ['add 1 8', 'contains 1', 'contains 3', 'print'])

)
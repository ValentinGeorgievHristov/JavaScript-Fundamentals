function solve(arr1) {
    let arr = arr1.slice()
    let wagonsPreparation = arr.splice(0, 1);
    let wagons = wagonsPreparation[0].split(' ');
    let wagonCapacity = Number(arr.splice(0, 1));
    let commands = arr.splice(0);
    let commandWag = [];
    let addingFunc;
    let getAllPeople = []
    //console.log(commands);

    for (let i = 0; i < commands.length; i++) {
        commandWag = commands[i].split(' ');

        if (commandWag.includes('Add')) {
            let command = commandWag[0]
            let num = commandWag[1]

            addingFunc = adding(wagons, num);
            // return addingFunc;
        } else if (!commandWag.includes('Add'))
            getAllPeople = commandWag[0]
        console.log(getAllPeople);

        for (let j = 0; j <= wagonCapacity.length; j++) {
            if (wagonCapacity[j] >= getAllPeople) {
                wagonCapacity += getAllPeople;
                console.log(wagonCapacity);
            }
            


        }
        // }  ??? трябва да завъртя цикъл и тогава да търся празни вагони и да добавям, а сега ще спя


        //}




    }

    function adding(arr, num) {

        arr.push(num);
        return arr;
    }


}
console.log(solve(['32 54 21 12 4 0 23', //пътн.по wagon
    '75', //капацитет вагон;
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75'
]))
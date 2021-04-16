function solve(arr1) {
    let arr = arr1.slice();
    // let wagonPassengersBasic = arr[0];
    let globalResult = '';
    let arrayCommand = []; // масив с пътници за настаняване;


    let wagonPassengers = arr[0].split(' ').map(Number);
    //console.log(wagonPassengers);
    let wagonCapacity = Number(arr[1]);
    //console.log(wagonCapacity);
    let commands = arr.slice(2);

    for (let command of commands) { // command след първата проверка остават оставащите команди.

        if (command.includes('Add')) {
            let commandSeparate = command.split(' ');
            let adding = commandSeparate[0];
            let countPeople = Number(commandSeparate[1]);

            wagonPassengers.push(countPeople); // добавяне на вагони с определени пътници;

            //console.log(adding);
            // console.log(countPeople);
            // console.log(wagonPassengers);
            // console.log(wagonPassengers);
        } else {
            arrayCommand.push(Number(command));
            //console.log(arrayCommand);
        }

    }
    //console.log(wagonPassengers);
    for (let l = 0; l < arrayCommand.length; l++) {

        for (let i = 0; i < wagonPassengers.length; i++) {



            if (wagonPassengers[i] + arrayCommand[l] <= wagonCapacity) {
                wagonPassengers[i] += arrayCommand[l];
                break;
            }
        }

    }
    for (let res of wagonPassengers) {
        globalResult += res + ' ';
       
    }
    console.log( globalResult);
  
}

(solve(['32 54 21 12 4 0 23', //пътн.по wagon
    '75', //капацитет вагон;
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75'
]))
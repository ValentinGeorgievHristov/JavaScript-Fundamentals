function solve(arr) {
    let separatedHouse = arr[0].split('@'); // къщи [ '10', '10', '10', '2' ]
    let commands = arr.slice(1);
    let action = commands // Jumps
    let counter = 1
    console.log(commands);
    //console.log(separatedHouse);

    while (!action == 'Love!') {
        action = commands.shift()

       console.log(action);
        
    }
    for (let i = 0; i < separatedHouse.length; i++) {
        console.log(separatedHouse[i]);
        
    }



}
solve(
    ['10@10@10@2', 'Jump 1', 'Jump 2', 'Love!']

)
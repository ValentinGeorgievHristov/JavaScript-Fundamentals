function solve(arr) { //  остава това : [ 'Unnecessary Milk', 'Urgent Tomatoes' ]
    let shopingList = arr[0].split('!'); // OSNOVEN LIST
    let commands = arr.slice(1);
    let result = '';
    //console.log(shopingList)

    //console.log(commands);

    for (let i = 0; i < commands.length; i++) {

        command = commands[i].split(' ');
        let priority = command[0];
        let product = command[1];
        let productTwo = command[2]
        let index = shopingList.indexOf(product)
        // console.log(product)
        // console.log(index)

        if (priority.includes('Urgent') && !shopingList.includes(product)) {
            shopingList.unshift(product);
        } else if (priority.includes('Unnecessary')&& shopingList.includes(product)) {
            shopingList.splice(index,1);
        } else if (priority.includes('Correct')&& shopingList.includes(product) ){
            shopingList.splice(index,1,productTwo)
        } else if (priority.includes('Rearrange')&& shopingList.includes(product)) {
            let res = shopingList.splice(index, 1).toString()
            shopingList.push(res);
        } 

    }

    result = shopingList.join(', ')

    console.log(result);
}
solve(

    [
        'Milk!Pepper!Salt!Water!Banana',
        'Urgent Salt',
        'Unnecessary Grapes ',
        'Correct Pepper Onion',
        'Rearrange Grapes',
        'Correct Tomatoes Potatoes',
        'Go Shopping!'
      ])
// priority == 'Urgent' && 

//4857544327AA97A1
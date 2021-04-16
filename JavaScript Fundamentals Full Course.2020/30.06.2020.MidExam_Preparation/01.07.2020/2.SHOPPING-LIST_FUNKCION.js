function solve(arr) { //  остава това : [ 'Unnecessary Milk', 'Urgent Tomatoes' ]
    let shopingList = arr[0].split('!'); // OSNOVEN LIST   чупи се функционалното на 3 та функция!
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
            function urgently(shopingList, product){
                shopingList.unshift(product);
                return shopingList;
               };
        } else if (priority.includes('Unnecessary')&& shopingList.includes(product)) {
           
            function unnecessary(shopingList,index){
                shopingList.splice(index,1);
             return shopingList;
            };
            
        } else if (priority.includes('Correct')&& shopingList.includes(product) ){
            function correcting(shopingList, index, productTwo){
                shopingList.splice(index,1,productTwo)
            return shopingList;
           };
        } else if (priority.includes('Rearrange')&& shopingList.includes(product)) {
            function rearranging(shopingList, index) {

                let res = shopingList.splice(index, 1).toString()
                shopingList.push(res);
            
                return shopingList
            
            };
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
      ]
      )
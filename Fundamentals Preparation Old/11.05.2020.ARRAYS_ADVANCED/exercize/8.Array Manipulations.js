function solve(arr) {
    let array1 = arr.splice(0, 1);
    let array = array1[0].split(' ');
    //console.log(array);
   let result = '';

    let actions = '';

    for (let i = 0; i < arr.length; i++) {
        actions = arr[i].split(' ');

        if (actions.includes('Add')) {
            array.push(actions[1]);
        } else if (actions.includes('Remove')) {
          array.splice(actions[1], 1);
             //console.log(array)
        } else if (actions.includes('RemoveAt')) {
            array.splice(actions[1],1);
            //console.log(array);            
        } else if (actions.includes('Insert')) {
            array.splice(actions[2], 0,actions[1]);
           // console.log(array);
        }
        //console.log(array);
    }
    for (let digits of array) {
        result += digits + ' '; 
    }
console.log(result);


}
solve(['4 19 2 53 6 43',
'Add 3',
'Remove 2',
'RemoveAt 1',
'Insert 8 3'
])
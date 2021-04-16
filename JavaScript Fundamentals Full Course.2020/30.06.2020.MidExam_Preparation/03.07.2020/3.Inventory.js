function solve(arr) {   //   не работи коректно!
    let copy = arr.slice();
    let list = [copy[0]]
    let rest = copy.slice(1);
    let result = '';

   // console.log(list);
    for (let i = 0; i < rest.length; i++) {
        let commands = rest[i].split('-');
        let command = commands[0];
        let item = commands[1];
        let index = list.indexOf(item);
        
        switch(command){
            
            case 'Collect'&&list.includes(item):  list.push(item);
            break;
            case 'Drop'&&list.includes(item):  list.splice(index,1);
            break;
            case 'Combine Items'&& list.includes(item):  list.splice(index,0,index)
            break;
            case 'Renew' && list.includes(item):  list.splice(index, 1).toString()
            break;
            default: break;
            
            
        }
          list.push(item)
       


    }

    console.log(list);



}
solve(['Iron, Wood, Sword', 'Collect - Gold', 'Drop - Wood', 'Craft!'])
//output:Iron, Sword, Gold 